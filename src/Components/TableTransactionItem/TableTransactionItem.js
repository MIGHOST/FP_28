import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateUserTransaction,
  deleteUsersTransaction,
} from "../../redux/operations/transactions";
import { getFromLocaleStorage } from "../../helpers/storage";

import styles from "./TableTransactionItem.module.css";

const TableTransactionItem = ({ transaction }) => {
  const { date, type, category, comment, sum, balance, _id } = transaction;
  const [isEditSum, setIsEditSum] = useState(false);
  const [isEditCommentary, setIsEditCommentary] = useState(false);
  const [editFields, setEditFields] = useState({ sum, comment });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;

    setEditFields({ ...editFields, [name]: value });
  };

  const editSum = () => {
    setIsEditSum(true);
    setIsEditCommentary(false);
  };

  const editCommentary = () => {
    setIsEditCommentary(true);
    setIsEditSum(false);
  };

  const handleKeyDown = async (e) => {
    if (e.key !== "Enter") return;

    setIsEditSum(false);
    setIsEditCommentary(false);

    const transaction = {
      sum: editFields.sum,
      comment: editFields.comment,
    };

    const token = JSON.parse(getFromLocaleStorage("persist:auth-token").token);
    dispatch(updateUserTransaction(_id, transaction, token));
  };

  const deleteHandler = () => {
    dispatch(deleteUsersTransaction(_id));
  };

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
        {isEditCommentary ? (
          <input
            type="text"
            value={editFields.comment}
            name="comment"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={styles.cellDataFieldComment}
            maxLength="40"
            autoFocus
          />
        ) : (
          <p
            className={`${styles.cellData} ${styles.edit}`}
            onClick={editCommentary}
          >
            {editFields.comment}
          </p>
        )}
      </div>
      <div className={`${styles.cell} ${styles.cellSum}`}>
        <p className={styles.cellTitle}>Сумма</p>
        {isEditSum ? (
          <input
            type="number"
            value={editFields.sum}
            name="sum"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={styles.cellDataFieldSum}
            maxLength="40"
            autoFocus
          />
        ) : (
          <p
            className={`${styles.cellData} ${styles.sum} ${styles.edit}`}
            onClick={editSum}
          >
            {editFields.sum}
          </p>
        )}
      </div>
      <div className={`${styles.cell} ${styles.cellBalance}`}>
        <p className={styles.cellTitle}>Баланс</p>
        <p className={styles.cellData}>{balance}</p>{" "}
        <div className={styles.delete}>
          <div className={styles.deleteIconSmall} onClick={deleteHandler}></div>
          <div className={styles.deleteWord} onClick={deleteHandler}>
            <p>delete</p>
          </div>
        </div>
      </div>
      <div className={styles.delete}>
        <div className={styles.deleteIconSmall} onClick={deleteHandler}></div>
        <div className={styles.deleteWord} onClick={deleteHandler}>
          <p>delete</p>
        </div>
      </div>
    </li>
  );
};

export default TableTransactionItem;
