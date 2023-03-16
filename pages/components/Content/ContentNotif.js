import React, { useState } from "react";
import styles from "../../../styles/Home.module.css";

function ContentNotif() {
  return (
    <div className={styles.login}>
      <form>
        <h1>Send Notifications</h1>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Notifications Text"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Send</button>
        {/* {error && <span>Email Atau Password Salah 🙄</span>} */}
      </form>
    </div>
  );
}

export default ContentNotif;
