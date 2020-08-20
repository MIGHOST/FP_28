import React from "react";
import styles from "./TableTransactionItem.module.css";

const TableTransactionItem = (props) => {
  const { date, type, category, commentary, sum, balance } = props.transaction;
  return (
    <li
      className={`${styles.tableTransactionItem} ${
        type === "+" ? styles.plus : styles.minus
      }`}
    >
      <div className={`${styles.cell} ${styles.cellDate}`}>
        <p className={styles.cellTitle}>Дата</p>
        <p className={`${styles.cellData} ${styles.date}`}>{date}</p>
      </div>
      <div className={`${styles.cell} ${styles.cellType}`}>
        <p className={styles.cellTitle}>Тип</p>
        <p className={styles.cellData}>{type}</p>
      </div>
      <div className={`${styles.cell} ${styles.cellCategory}`}>
        <p className={styles.cellTitle}>Категория</p>
        <p className={styles.cellData}>{category}</p>
      </div>
      <div className={`${styles.cell} ${styles.cellComment}`}>
        <p className={styles.cellTitle}>Комментарий</p>
        <p className={styles.cellData}>{commentary}</p>
      </div>
      <div className={`${styles.cell} ${styles.cellSum}`}>
        <p className={styles.cellTitle}>Сумма</p>
        <p className={`${styles.cellData} ${styles.sum}`}>{sum}</p>
      </div>
      <div className={`${styles.cell} ${styles.cellBalance}`}>
        <p className={styles.cellTitle}>Баланс</p>
        <p className={styles.cellData}>{balance}</p>
      </div>
    </li>
  );
};

export default TableTransactionItem;
