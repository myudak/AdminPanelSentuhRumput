import React, { useState, useEffect } from "react";
import styles from "../../../styles/Home.module.css";
import Table from "../Table";

import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebaseConfig";

function Content() {
  const [dataUser, setDataUser] = useState([]);

  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const q = query(collection(db, "users"), orderBy("name"));
    onSnapshot(q, (querySnapshot) => {
      setDataUser(
        querySnapshot.docs
          .filter((doc) => {
            console.log(doc.id);
            if (doc.id == "admin@sentuhrumput.id") {
              return false;
            }
            return true;
          })
          .map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
      );
    });
  }, []);

  return (
    <div className={styles.contentcontainer}>
      {console.log(dataUser)}
      {/* List Users */}

      {/* todo : 
      Daftar Laporan, CRUD daftar laporan dari user
       Daftar User    PAGINATION
       Daftar Permintaan verifikasi user
       Daftar submit lokasi dari user */}
      <div className={styles.listusers}>
        <h2>CRUD USER</h2>
        <Table
          docName="users"
          tHeader={[
            "No",
            "ID",
            "EMAIL",
            "Name",
            "Date Joined",
            "Valid Report",
            "Action",
          ]}
          tContent={["id", "email", "name", "dateJoined", "validReport"]}
          data={dataUser}
          rowsPerPage={1}
        />
      </div>
    </div>
  );
}

export default Content;
