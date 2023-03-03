import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Table from "./Table";
import { dataTable } from "../data/dummy";

function ContentGambar() {
  const [dummy] = useState([...dataTable]);
  return (
    <div className={styles.contentcontainer}>
      {/* 
        3. Galeri
            Crud galeri, ada 5 kategori
            - Flora, gambar2 tumbuhan
            - Fauna, gambar2 hewan
            - Lanskap, gambar2 pemandangan hutan/taman
            - Aktivitas, gambar2 aktivitas orang di taman/hutan
            - Cuaca, gambar hutan/taman malam hari, siang hari, hujan, mendung
    */}

      {/* Kategori Flora */}
      <div className={styles.listusers}>
        <h2>Galeri Flora</h2>
        <Table
          data={dummy}
          namedkk={["Name", "Image", "Location"]}
          rowsPerPage={2}
        />
      </div>
      {/* Kategori Fauna */}
      <div className={styles.listusers}>
        <h2>Galeri Fauna</h2>
        <Table
          data={dummy}
          namedkk={["Name", "Image", "Location"]}
          rowsPerPage={2}
        />
      </div>
      {/* Kategori Lanskap */}
      <div className={styles.listusers}>
        <h2>Galeri Lanskap</h2>
        <Table
          data={dummy}
          namedkk={["Name", "Image", "Location"]}
          rowsPerPage={2}
        />
      </div>
      {/* Kategori Aktivitas */}
      <div className={styles.listusers}>
        <h2>Galeri Aktivitas</h2>
        <Table
          data={dummy}
          namedkk={["Name", "Image", "Location"]}
          rowsPerPage={2}
        />
      </div>
      {/* Kategori Cuaca */}
      <div className={styles.listusers}>
        <h2>Galeri Cuaca</h2>
        <Table
          data={dummy}
          namedkk={["Name", "Image", "Location"]}
          rowsPerPage={2}
        />
      </div>
    </div>
  );
}

export default ContentGambar;
