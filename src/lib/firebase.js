import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-47dcf.firebaseapp.com",
  projectId: "reactchat-47dcf",
  storageBucket: "reactchat-47dcf.firebasestorage.app",
  messagingSenderId: "812373219757",
  appId: "1:812373219757:web:4ba7b72f3b569c79ec6924"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
// export const storage = getStorage()