import React, { useState } from "react";

import useTable from "../hooks/table.js";
import styles from "../../styles/Home.module.css";
import TableFooter from "./TableFooter.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../lib/firebaseConfig";

const Table = ({
  data,
  rowsPerPage,
  tHeader = ["Nama", "Email", "Location"],
  tContent = [],
  docName = "users",
}) => {
  // const handleDelete = async (idData) => {
  //   const taskDocRef = doc(db, docName, idData);
  //   try {
  //     await deleteDoc(taskDocRef);
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <table className={styles.table}>
        <tr>
          <th className={styles.tableHeader}>No</th>
          <th className={styles.tableHeader}>{tHeader[0]}</th>
          <th className={styles.tableHeader}>{tHeader[1]}</th>
          <th className={styles.tableHeader}>{tHeader[2]}</th>
          <th className={styles.tableHeader}>{tHeader[3]}</th>
          <th className={styles.tableHeader}>{tHeader[4]}</th>
          <th className={styles.tableHeader}>{tHeader[5]}</th>
          <th className={styles.tableHeader}>{tHeader[6]}</th>
          <th className={styles.tableHeader}>Actions</th>
        </tr>
        {slice.map((el, index) => (
          <tr className={styles.tableRowItems}>
            {console.log(el.data)}
            <td className={styles.tableCell}>{index + 1}</td>
            <td className={styles.tableCell}>{el.data[tContent[0]]}</td>
            <td className={styles.tableCell}>{el.data[tContent[1]]}</td>
            <td className={styles.tableCell}>{el.data[tContent[2]]}</td>
            <td className={styles.tableCell}>{el.data[tContent[3]]}</td>
            <td className={styles.tableCell}>{el.data[tContent[4]]}</td>
            <td className={styles.tableCell}>
              {el.data[tContent[5]].longitude}
            </td>
            {/* susah ngurus date */}

            <td className={styles.tableCell}>
              {new Date(
                el.data[tContent[6]].seconds * 1000
              ).toLocaleDateString()}
            </td>

            {/* TODO : Actionnya “approve”, “reject” sama “open location” */}
            <td>
              <button className={styles.buttonActions}>Approve</button>
              <button className={styles.buttonActions}>Reject</button>
              <button className={styles.buttonActions}>Open Location</button>
            </td>
          </tr>
        ))}
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;
