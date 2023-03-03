import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Table from "./Table";
import { dataTable } from "../data/dummy";

function ContentGambar() {
  const [dummy] = useState([...dataTable]);
  return (
    <div className={styles.contentcontainer}>
      {/* 
     5. Submisi
Crud submisi lokasi dari user
    */}

      {/* Crud Submisi lokasi user */}
      <div className={styles.listusers}>
        <h2>Lokasi User</h2>
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
