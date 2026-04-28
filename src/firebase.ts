import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Replace these placeholders with the values from your Firebase project.
// See FIREBASE_SETUP.md for step-by-step instructions.
export const firebaseConfig = {
  apiKey: "AIzaSyAnULrJzoJQaiBJ0c8yfZd7RTTXtZTMo5I",
  authDomain: "tournament-hub-728f7.firebaseapp.com",
  projectId: "tournament-hub-728f7",
  storageBucket: "tournament-hub-728f7.firebasestorage.app",
  messagingSenderId: "1019086306392",
  appId: "1:1019086306392:web:dc076bef3dc259f55d5e2d"
};



// Simple flag the UI uses to show a "please configure firebase" banner.
export const isFirebaseConfigured =
  !firebaseConfig.apiKey.startsWith("YOUR_") &&
  !firebaseConfig.projectId.startsWith("YOUR_");

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
