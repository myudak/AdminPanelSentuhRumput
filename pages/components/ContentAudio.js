import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Table from "./Table";
import { dataTable } from "../data/dummy";

function ContentAudio() {
  const [dummy] = useState([...dataTable]);
  return (
    <div className={styles.contentcontainer}>
      {/* 
          4. Audio
          Crud musik, 3 kategori
          - Fauna
          - Cuaca
          - Latar belakang
      */}

      {/* Kategori Fauna */}
      <div className={styles.listusers}>
        <h2>Galeri Flora</h2>
        <Table
          data={dummy}
          namedkk={["Name", "Music", "Location"]}
          rowsPerPage={2}
        />
      </div>
      {/* Kategori Cuaca */}
      <div className={styles.listusers}>
        <h2>Galeri Cuaca</h2>
        <Table
          data={dummy}
          namedkk={["Name", "Music", "Location"]}
          rowsPerPage={2}
        />
      </div>
      {/* kategori Latar Belakang */}
      <div className={styles.listusers}>
        <h2>Galeri Latar Belakang</h2>
        <Table
          data={dummy}
          namedkk={["Name", "Music", "Location"]}
          rowsPerPage={2}
        />
      </div>
    </div>
  );
}

export default ContentAudio;
