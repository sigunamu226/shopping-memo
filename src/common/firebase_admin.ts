import { initializeApp } from "firebase-admin";
import { cert, getApp, getApps, ServiceAccount } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const firebaseAdminConfig: ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

const appName = "firebase-admin";

const app = getApps().length
  ? getApp(appName)
  : initializeApp(
      {
        credential: cert(firebaseAdminConfig),
      },
      appName
    );

export const firestoreAdmin = getFirestore(app);
