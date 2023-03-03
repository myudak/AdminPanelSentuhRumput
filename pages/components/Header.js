import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "../../images/SandboxSmall.png";

function Header(props) {
  return (
    <div className={styles.headcontainer}>
      <div className={styles.headwrapper}>
        <div className={styles.title}>
          <h2>Sentuh Rumput</h2>
          <p>Dashboard | {props.name}</p>
        </div>
        <div className={styles.profile}>
          <img src={Image} alt="profile" className={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default Header;
