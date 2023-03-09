import React, { useState, useEffect } from "react";
import styles from "../../../styles/Home.module.css";
import Table from "../Table";

import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebaseConfig";

function ContentGambar() {
  const [dataUser, setDataUser] = useState([]);

  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const q = query(collection(db, "reports"));
    onSnapshot(q, (querySnapshot) => {
      setDataUser(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className={styles.contentcontainer}>
      {console.log(dataUser)}
      {/* 
      6. Pelaporan Crud pelaporan
        */}

      {/* CRUD PELAPORAN*/}
      <div className={styles.listusers}>
        <h2>Laporan User</h2>
        <Table
          docName="reports"
          data={dataUser}
          tHeader={[
            "No",
            "ID",
            "Type",
            "Description",
            "Date Created",
            "Attached",
            "Action",
          ]}
          tContent={["id", "type", "description", "dateCreated", "attached"]}
          rowsPerPage={2}
        />
      </div>
    </div>
  );
}

export default ContentGambar;
