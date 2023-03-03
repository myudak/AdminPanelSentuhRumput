import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Table from "./Table";
import { dataTable } from "../data/dummy";

function ContentGambar() {
  const [dummy] = useState([...dataTable]);
  return (
    <div className={styles.contentcontainer}>
      {/* 
      6. Pelaporan Crud pelaporan
        */}

      {/* CRUD PELAPORAN*/}
      <div className={styles.listusers}>
        <h2>Laporan User</h2>
        <Table
          data={dummy}
          namedkk={["Name", "Email", "Location"]}
          rowsPerPage={2}
        />
      </div>
    </div>
  );
}

export default ContentGambar;
