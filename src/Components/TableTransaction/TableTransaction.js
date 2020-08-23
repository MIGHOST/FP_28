import React from "react";
import { useSelector } from "react-redux";

import TableTransactionItem from "../TableTransactionItem/TableTransactionItem";
import styles from "./TableTransaction.module.css";

const TableTransaction = () => {
  const transactionsArr = useSelector((state) => state.tableData);

  return (
    <div className={styles.wrapper}>
      {transactionsArr.length === 0 && <p>нет транзакций</p>}
      {!!transactionsArr.length && (
        <>
          <div className={styles.listTitle}>
            <p className={styles.date}>Дата</p>
            <p className={styles.type}>Тип</p>
            <p className={styles.category}>Категория</p>
            <p className={styles.comment}>Комментарий</p>
            <p className={styles.sum}>Сумма</p>
            <p className={styles.balance}>Баланс</p>
          </div>
          <ul className={styles.list}>
            {transactionsArr.map((transaction) => {
              return (
                <TableTransactionItem
                  key={transaction.id}
                  transaction={transaction}
                />
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default TableTransaction;
