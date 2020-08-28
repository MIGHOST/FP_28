import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";

import TableTransactionItem from "../TableTransactionItem/TableTransactionItem";
import { screenSizes } from "../../constants";
import debounce from "../../helpers/debounce";

import AddButton from "../AddButton/AddButton";
import styles from "./TableTransaction.module.css";

const TableTransaction = ({ modalOpener, modalOpen }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setScreenWidth(window.innerWidth);
    }, 1000);
    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [screenWidth]);
  const transactionsArr = useSelector((state) => state.tableData);
<<<<<<< HEAD

  return (
    <div className={styles.wrapper}>
      {transactionsArr.length === 0 && (
        <p className={styles.zeroTransactions}>
          Список транзакций пуст. Добавте транзакцию
        </p>
      )}

      {!!transactionsArr.length && (
        <>
          <header className={styles.listTitle}>
=======
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
>>>>>>> origin/try
            <p className={styles.date}>Дата</p>
            <p className={styles.type}>Тип</p>
            <p className={styles.category}>Категория</p>
            <p className={styles.comment}>Комментарий</p>
            <p className={styles.sum}>Сумма</p>
            <p className={styles.balance}>Баланс</p>
<<<<<<< HEAD
            {/* <div className={styles.delete}></div> */}
          </header>
          <ul className={styles.list}>
            {screenWidth < screenSizes.medium &&
              transactionsArr.map((transaction) => {
                return (
                  <TableTransactionItem
                    key={transaction._id}
                    transaction={transaction}
                  />
                );
              })}
            {screenWidth > screenSizes.medium &&
              screenWidth < screenSizes.large && (
                <Scrollbars style={{ height: 690 }}>
                  {transactionsArr.map((transaction) => {
                    return (
                      <TableTransactionItem
                        key={transaction._id}
                        transaction={transaction}
                      />
                    );
                  })}
                </Scrollbars>
              )}
            {screenWidth > screenSizes.large && (
              <Scrollbars style={{ height: 604 }}>
                {transactionsArr.map((transaction) => {
                  return (
                    <TableTransactionItem
                      key={transaction._id}
                      transaction={transaction}
                    />
                  );
                })}
              </Scrollbars>
            )}
          </ul>
        </>
      )}
      {!modalOpen && <AddButton modalOpener={modalOpener} />}
=======
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
>>>>>>> origin/try
    </div>
  );
};

export default TableTransaction;
