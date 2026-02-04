import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);

// 🔐 Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// 🗄️ Firestore
export const db = getFirestore(app);
