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
            <p className={styles.date}>Дата</p>
            <p className={styles.type}>Тип</p>
            <p className={styles.category}>Категория</p>
            <p className={styles.comment}>Комментарий</p>
            <p className={styles.sum}>Сумма</p>
            <p className={styles.balance}>Баланс</p>
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
    </div>
  );
};

export default TableTransaction;
