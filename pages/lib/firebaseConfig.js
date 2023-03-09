import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "sentuh-rumput.firebaseapp.com",
  projectId: "sentuh-rumput",
  storageBucket: "sentuh-rumput.appspot.com",
  messagingSenderId: "684957327996",
  appId: "1:684957327996:web:d56ae70a610a57cd2d9ff9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
