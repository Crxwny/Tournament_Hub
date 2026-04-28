import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import type { UserProfile } from "../types";

export async function registerUser(
  email: string,
  password: string,
  username: string,
): Promise<UserProfile> {
  const cred = await createUserWithEmailAndPassword(auth, email, password);

  const profile: UserProfile = {
    uid: cred.user.uid,
    email,
    username,
    role: "user",
    createdAt: Date.now(),
  };

  await setDoc(doc(db, "users", cred.user.uid), profile);
  return profile;
}

export async function loginUser(email: string, password: string) {
  await signInWithEmailAndPassword(auth, email, password);
}

export async function logoutUser() {
  await signOut(auth);
}

export async function fetchUserProfile(uid: string): Promise<UserProfile | null> {
  const snap = await getDoc(doc(db, "users", uid));
  if (!snap.exists()) return null;
  return snap.data() as UserProfile;
}
