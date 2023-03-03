import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

import Table from "./Table";
import { dataTable, dataDonut, dataLine } from "../data/dummy";

function Content() {
  const [dummy] = useState([...dataTable]);
  return (
    <div className={styles.contentcontainer}>
      {/* chart started  */}
      <div className={styles.charts}>
        <div className={styles.bar}>
          <h2>Users</h2>
          <Line data={dataLine} width={400} height={400} />
        </div>
        <div className={styles.circle}>
          <h2>Users Arrived</h2>
          <Doughnut data={dataDonut} width={400} height={400} />
        </div>
      </div>
      {/* List Users */}

      {/* todo : 
      Daftar Laporan, CRUD daftar laporan dari user
       Daftar User    PAGINATION
       Daftar Permintaan verifikasi user
       Daftar submit lokasi dari user */}
      <div className={styles.listusers}>
        <h2>Daftar User</h2>
        <Table data={dummy} rowsPerPage={2} />
      </div>
      <div className={styles.listusers}>
        <h2>Daftar Laporan</h2>
        <Table data={dummy} rowsPerPage={2} />
      </div>
    </div>
  );
}

export default Content;
