import React, { useState, useEffect } from "react";
import styles from "../../../styles/Home.module.css";
import Table from "../Table";

import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebaseConfig";

function ContentGambar() {
  const [dataUser, setDataUser] = useState([]);

  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const q = query(collection(db, "submissions"));
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
      {/* 
     5. Submisi
Crud submisi lokasi dari user
    */}

      {/* Crud Submisi lokasi user */}
      <div className={styles.listusers}>
        <h2>Lokasi User</h2>
        <Table
          docName="submissions"
          data={dataUser}
          tHeader={[
            "No",
            "Author Email",
            "Coordinates",
            "description",
            "id",
            "Date Created",
            "Image",
            "Name",
          ]}
          tContent={[
            "authorEmail",
            "coordinatess",
            "description",
            "dateCreated",
            "id",
            "image",
            "name",
          ]}
          rowsPerPage={2}
        />
      </div>
    </div>
  );
}

export default ContentGambar;
