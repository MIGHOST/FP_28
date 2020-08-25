import React from "react";
import { useSelector } from "react-redux";

import TableTransactionItem from "../TableTransactionItem/TableTransactionItem";
import AddButton from "../AddButton/AddButton";
import styles from "./TableTransaction.module.css";

const TableTransaction = ({ modalOpener }) => {
  const transactionsArr = useSelector((state) => state.tableData);
  return (
    <div className={styles.wrapper}>
      {transactionsArr.length === 0 && (
        <p className={styles.zeroTransactions}>
          Список транзакций пуст. Нажмите на
          {
            <span>
              <AddButton modalOpener={modalOpener} />
            </span>
          }
          чтобы добавить
        </p>
      )}
      {!!transactionsArr.length && (
        <>
          <div className={styles.listTitle}>
            <p className={styles.date}>Дата</p>
            <p className={styles.type}>Тип</p>
            <p className={styles.category}>Категория</p>
            <p className={styles.comment}>Комментарий</p>
            <p className={styles.sum}>Сумма</p>
            <p className={styles.balance}>Баланс</p>
            <div className={styles.delete}></div>
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
          <div className={styles.addButtonInList}>
            <AddButton modalOpener={modalOpener} />
          </div>
        </>
      )}
    </div>
  );
};

export default TableTransaction;
