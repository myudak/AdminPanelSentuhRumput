import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faLocationArrow,
  faBell,
  faFlag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function LeftNavbar() {
  return (
    <div className={styles.navcontainer}>
      <div className={styles.logo}>
        <h2>Sandbox</h2>
      </div>
      <div className={styles.wrapper}>
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faUser}
              style={{ width: "18px", cursor: "pointer" }}
            />{" "}
            <a href="/users" shallow={true}>
              Users{" "}
            </a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faFlag}
              style={{ width: "18px", cursor: "pointer" }}
            />{" "}
            <Link href="/laporan" shallow={true}>
              Laporan
            </Link>
            {/* <a href="/artikel">Artikel</a> */}
          </li>
          <li>
            <FontAwesomeIcon
              icon={faLocationArrow}
              style={{ width: "18px", cursor: "pointer" }}
            />{" "}
            <Link href="/submisi" shallow={true}>
              Submisi
            </Link>
            {/* <a href="/artikel">Artikel</a> */}
          </li>
          <li>
            <FontAwesomeIcon
              icon={faImage}
              style={{ width: "18px", cursor: "pointer" }}
            />{" "}
            <Link href="/lokasi" shallow={true}>
              Lokasi
            </Link>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faBell}
              style={{ width: "18px", cursor: "pointer" }}
            />{" "}
            <Link href="/notifications" shallow={true}>
              Notifications
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftNavbar;
