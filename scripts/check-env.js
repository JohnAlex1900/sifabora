import "dotenv/config";

const required = [
  "FIREBASE_PROJECT_ID",
  "FIREBASE_CLIENT_EMAIL",
  "FIREBASE_PRIVATE_KEY",
  "VITE_FIREBASE_API_KEY",
  "VITE_FIREBASE_AUTH_DOMAIN",
  "VITE_FIREBASE_PROJECT_ID",
  "VITE_FIREBASE_STORAGE_BUCKET",
  "VITE_FIREBASE_MESSAGING_SENDER_ID",
  "VITE_FIREBASE_APP_ID",
];

const missing = required.filter((k) => !process.env[k] || process.env[k].trim() === "");

if (missing.length > 0) {
  console.error("\nMissing required environment variables for Firebase:\n");
  missing.forEach((m) => console.error("  -", m));
  console.error("\nAdd them to your .env file or environment and try again.\n");
  process.exit(1);
}

// If all present, exit normally (start continues)
process.exit(0);