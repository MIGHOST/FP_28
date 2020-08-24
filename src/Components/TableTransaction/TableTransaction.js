import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TableTransactionItem from "../TableTransactionItem/TableTransactionItem";
import styles from "./TableTransaction.module.css";

import { getUserTransactions } from "../../redux/operations/transactions";

const TableTransaction = () => {
  const transactionsArr = useSelector((state) => state.tableData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserTransactions());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.listTitle}>
          <p className={styles.date}>Дата</p>
          <p className={styles.type}>Тип</p>
          <p className={styles.category}>Категория</p>
          <p className={styles.comment}>Комментарий</p>
          <p className={styles.sum}>Сумма</p>
          <p className={styles.balance}>Баланс</p>
        </li>
        {transactionsArr.map((transaction) => {
          return (
            <TableTransactionItem
              key={transaction._id}
              transaction={transaction}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TableTransaction;
