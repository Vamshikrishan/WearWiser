import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDbDgg4bCW3vf3Hpob7Kqq6MN2nmg3bsg",
  authDomain: "wearwiser-d8933.firebaseapp.com",
  projectId: "wearwiser-d8933",
  appId: "1:831197458432:web:4c7957973ce1dc29a3e8e5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
