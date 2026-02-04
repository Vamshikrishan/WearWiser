import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

/* SAVE PROFILE */
export const saveUserProfile = async (uid, data) => {
  const ref = doc(db, "users", uid);
  await setDoc(ref, data, { merge: true });
};

/* LOAD PROFILE */
export const getUserProfile = async (uid) => {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
};
