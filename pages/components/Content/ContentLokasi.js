import React, { useState, useEffect } from "react";
import styles from "../../../styles/Home.module.css";
import Table from "../TableLokasi";

import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebaseConfig";

function ContentLokasi() {
  const [dataUser, setDataUser] = useState([]);

  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const q = query(collection(db, "locations"));
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
          docName="locations"
          data={dataUser}
          tHeader={[
            "ID",
            "Author Email",
            "Name",
            "Image",
            "Description",
            "Coordinates",
            "Review",
            "Rating",
            "Date Created",
          ]}
          tContent={[
            "id",
            "authorEmail",
            "name",
            "image",
            "description",
            "coordinates",
            "review",
            "daring",
            "dateCreated",
          ]}
          rowsPerPage={2}
        />
      </div>
    </div>
  );
}

export default ContentLokasi;
