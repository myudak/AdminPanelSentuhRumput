import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { auth } from "./lib/firebaseConfig";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "./lib/firebaseConfig";

function login() {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email == "myudak@sentuhrumput.com" && password == "password") {
      console.log("masuk");
      router.push("/users");
      setError(false);
    } else {
      setError(true);
    }

    // const userCredential = await signInWithEmailAndPassword(
    //   auth,
    //   email,
    //   password
    // );
    // const userId = userCredential.user.uid;
    // console.log(userId);
    // // const q = query(collection(db, "locations"));
    // const userDoc = await query(collection(db, "users").doc(userId).get());
    // if (!userDoc.exists) {
    //   setError("Invalid email or password.");
    //   return;
    // }

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log(user);
    //     // ...
    //   })
    //   .catch((error) => {
    //     setError(true);
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Login</button>
        {error && <span>Email Atau Password Salah 🙄</span>}
      </form>
    </div>
  );
}

export default login;
