import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TableTransactionItem from "../TableTransactionItem/TableTransactionItem";
import styles from "./TableTransaction.module.css";

import { getUserTransactions } from "../../redux/operations/transactions";

const TableTransaction = () => {
  const transactionsArr = useSelector((state) => state.tableData);
<<<<<<< HEAD
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
=======

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
>>>>>>> remotes/origin/F4-5-6-8-9
    </div>
  );
};

export default TableTransaction;
