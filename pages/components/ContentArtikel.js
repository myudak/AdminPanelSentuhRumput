import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Table from "./Table";
import { dataTable } from "../data/dummy";

function ContentPengguna() {
  const [dummy] = useState([...dataTable]);
  return (
    <div className={styles.contentcontainer}>
      {/* 
        2. Artikel
        Crud artikel, 4 kategori
        - aktivitas fisik
        - perubaham iklim
        - rekreasi luar ruang
        - flora fauna langka
        */}

      {/* Aktivitas Fisik */}
      <div className={styles.listusers}>
        <h2>Artikel Fisik</h2>
        <Table data={dummy} rowsPerPage={2} />
      </div>
      {/* Aktivitas Iklim */}
      <div className={styles.listusers}>
        <h2>Artikel Iklim</h2>
        <Table data={dummy} rowsPerPage={2} />
      </div>
      {/* Aktivitas Luar Ruang */}
      <div className={styles.listusers}>
        <h2>Artikel Luar Ruang</h2>
        <Table data={dummy} rowsPerPage={2} />
      </div>
      {/* Aktivitas Flora Fauna Langka */}
      <div className={styles.listusers}>
        <h2>Artikel Flora Fauna Langka</h2>
        <Table data={dummy} rowsPerPage={2} />
      </div>
    </div>
  );
}

export default ContentPengguna;
