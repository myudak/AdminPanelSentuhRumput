import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faCog,
  faHeadphones,
  faNewspaper,
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
            <a href="/" shallow={true}>
              Pengguna{" "}
            </a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faNewspaper}
              style={{ width: "18px", cursor: "pointer" }}
            />{" "}
            <Link href="/artikel" shallow={true}>
              Artikel
            </Link>
            {/* <a href="/artikel">Artikel</a> */}
          </li>
          <li>
            <FontAwesomeIcon
              icon={faImage}
              style={{ width: "18px", cursor: "pointer" }}
            />{" "}
            <Link href="/gambar" shallow={true}>
              Galeri
            </Link>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faHeadphones}
              style={{ width: "18px", cursor: "pointer" }}
            />{" "}
            <Link href="/audio">Audio</Link>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCog}
              style={{ width: "18px", cursor: "pointer" }}
            />{" "}
            <Link href="/submisi"> Submisi</Link>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faFlag}
              style={{ width: "18px", cursor: "pointer" }}
            />{" "}
            <Link href="/pelaporan">Pelaporan</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftNavbar;
