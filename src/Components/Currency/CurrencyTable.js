import React from "react";
import style from "./Currency.module.css";

const CurrencyTable = ({ el, index }) => {
  return (
    <li className={style.exData} key={index}>
      <div className={style.exItem}>{`${el.currency.toUpperCase()}`}</div>
      <div className={style.exItem}>{`${el[el.currency].buy}`}</div>
      <div className={style.exItem}>{`${el[el.currency].sel}`}</div>
    </li>
  );
};

export default CurrencyTable;
