import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "sentuh-rumput.firebaseapp.com",
  projectId: "sentuh-rumput",
  storageBucket: "sentuh-rumput.appspot.com",
  messagingSenderId: "684957327996",
  appId: "1:684957327996:web:d56ae70a610a57cd2d9ff9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
