import type { VercelRequest, VercelResponse } from "@vercel/node";
import app, { prepareApp } from "../server/index";

let initPromise: Promise<void> | null = null;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // initialize the express app once per cold-start
  if (!initPromise) {
    initPromise = (async () => {
      await prepareApp();
    })();
  }
  await initPromise;

  // forward to the express app (express is a request handler)
  // cast to any to match Node/Vercel request/response shapes
  return (app as any)(req as any, res as any);
}
