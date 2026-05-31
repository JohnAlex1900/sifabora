// server/firebase.ts
import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import path from "path";
import { fileURLToPath } from "url";

// Load .env in local/dev (explicit path to avoid cwd issues)
import dotenv from "dotenv";

// This replaces __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load root .env first, then optional server/.env for local overrides.
dotenv.config({ path: path.resolve(__dirname, "../.env") });
dotenv.config({ path: path.resolve(__dirname, "./.env") });

/**
 * Try these methods (in order) to construct a service account:
 * 1) Full JSON string in FIREBASE_SERVICE_ACCOUNT
 * 2) Individual env vars (FIREBASE_PRIVATE_KEY, FIREBASE_CLIENT_EMAIL, FIREBASE_PROJECT_ID, etc.)
 * This intentionally avoids loading credentials from local JSON files to prevent accidental secret exposure.
 */
function getServiceAccount(): admin.ServiceAccount | null {
  // 1) Full JSON string
  let fullJson = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (fullJson) {
    try {
      // strip surrounding quotes if someone pasted with quotes in .env
      fullJson = fullJson.trim().replace(/^["']|["']$/g, "");
      const parsed = JSON.parse(fullJson);
      // ensure private_key newline characters are correct
      if (parsed.private_key && typeof parsed.private_key === "string") {
        parsed.private_key = parsed.private_key.replace(/\\n/g, "\n");
      }
      return parsed;
    } catch (err) {
      console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT JSON:", err);
    }
  }

  // 2) Individual env vars
  const {
    FIREBASE_PRIVATE_KEY,
    FIREBASE_CLIENT_EMAIL,
    FIREBASE_PROJECT_ID,
    FIREBASE_CLIENT_ID,
    FIREBASE_AUTH_URI,
    FIREBASE_TOKEN_URI,
    FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    FIREBASE_CLIENT_X509_CERT_URL,
    FIREBASE_TYPE,
  } = process.env;
  if (FIREBASE_PRIVATE_KEY && FIREBASE_CLIENT_EMAIL && FIREBASE_PROJECT_ID) {
    // strip quotes if present and fix newline escapes
    const privateKey = FIREBASE_PRIVATE_KEY.trim().replace(/^["']|["']$/g, "").replace(/\\n/g, "\n");
    const sa: any = {
      type: FIREBASE_TYPE || "service_account",
      project_id: FIREBASE_PROJECT_ID,
      private_key: privateKey,
      client_email: FIREBASE_CLIENT_EMAIL,
    };
    if (FIREBASE_CLIENT_ID) sa.client_id = FIREBASE_CLIENT_ID;
    if (FIREBASE_AUTH_URI) sa.auth_uri = FIREBASE_AUTH_URI;
    if (FIREBASE_TOKEN_URI) sa.token_uri = FIREBASE_TOKEN_URI;
    if (FIREBASE_AUTH_PROVIDER_X509_CERT_URL) sa.auth_provider_x509_cert_url = FIREBASE_AUTH_PROVIDER_X509_CERT_URL;
    if (FIREBASE_CLIENT_X509_CERT_URL) sa.client_x509_cert_url = FIREBASE_CLIENT_X509_CERT_URL;
    return sa;
  }

  return null;
}

const serviceAccount = getServiceAccount();

if (!serviceAccount) {
  throw new Error(
    "Firebase service account not configured. Set FIREBASE_SERVICE_ACCOUNT (JSON) or required FIREBASE_* env vars."
  );
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

const db = getFirestore();

export { db };
