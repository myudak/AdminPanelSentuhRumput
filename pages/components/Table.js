import React, { useState } from "react";

import useTable from "../hooks/table.js";
import styles from "../../styles/Home.module.css";
import TableFooter from "./TableFooter.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Table = ({
  data,
  rowsPerPage,
  namedkk = ["Nama", "Email", "Location"],
}) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <table className={styles.table}>
        <tr>
          <th className={styles.tableHeader}>{namedkk[0]}</th>
          <th className={styles.tableHeader}>{namedkk[1]}</th>
          <th className={styles.tableHeader}>{namedkk[2]}</th>
          <th className={styles.tableHeader}>Actions</th>
        </tr>
        {slice.map((el) => (
          <tr className={styles.tableRowItems}>
            <td className={styles.tableCell}>{el.name}</td>
            <td className={styles.tableCell}>{el.Email}</td>
            <td className={styles.tableCell}>{el.Location}</td>
            <td>
              <FontAwesomeIcon
                icon={faTrash}
                style={{ width: "18px", cursor: "pointer" }}
              />{" "}
            </td>
          </tr>
        ))}
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;
