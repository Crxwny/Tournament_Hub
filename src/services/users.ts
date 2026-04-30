import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import type { UserProfile } from "../types";

export async function listAllUsers(): Promise<UserProfile[]> {
  const snap = await getDocs(collection(db, "users"));
  return snap.docs.map((d) => d.data() as UserProfile);
}

export async function findUserByUsername(
  username: string,
): Promise<UserProfile | null> {
  const q = query(
    collection(db, "users"),
    where("username", "==", username),
  );
  const snap = await getDocs(q);
  if (snap.empty) return null;
  return snap.docs[0].data() as UserProfile;
}
