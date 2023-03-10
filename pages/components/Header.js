import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Image from "../../images/SandboxSmall.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faFlag } from "@fortawesome/free-solid-svg-icons";

function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a href="#" className={styles.menuItem}>
        <span className={styles.iconButton}>
          {" "}
          <FontAwesomeIcon
            icon={props.imagess}
            style={{ width: "18px", cursor: "pointer" }}
          />{" "}
        </span>
        {props.children}
      </a>
    );
  }
  return (
    <div className={styles.dropdown}>
      <DropdownItem imagess={faImage}>My Profile</DropdownItem>
      <DropdownItem>Logout</DropdownItem>
    </div>
  );
}

function Header(props) {
  return (
    <div className={styles.headcontainer}>
      <div className={styles.headwrapper}>
        <div className={styles.title}>
          <h2>Sentuh Rumput</h2>
          <p>Dashboard | {props.name}</p>
        </div>
        <HeaderProfile>
          <DropdownMenu></DropdownMenu>
        </HeaderProfile>
      </div>
    </div>
  );
}

function HeaderProfile(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.profile}>
      <img
        src={Image}
        onClick={() => setOpen(!open)}
        alt="profile"
        className={styles.image}
      />

      {open && props.children}
    </div>
  );
}

export default Header;
