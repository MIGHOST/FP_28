import React, { useState, useEffect } from "react";
import style from "./Currency.module.css";
import moment from "moment";
import axios from "axios";

const requestCurrencyURL = `https://cors-anywhere.herokuapp.com/https://api.privatbank.ua/p24api/exchange_rates?json&date=${moment(
  Date.now()
).format("DD.MM.yyyy")}`;




const Currency = () => {
  const [arrayOfExchange, setArrayOfExchange] = useState([]);
  

  const getData = async() => {return await axios.get(requestCurrencyURL)}

  useEffect(() => {
    getData()
    .then(data => setArrayOfExchange(data.data.exchangeRate))
    .catch(e => console.log(e))
  }, [])

  const currencyArray = arrayOfExchange.filter(el => 
    el.currency === "EUR" ||
   el.currency === "USD" ||
   el.currency === "RUB" ||
   el.currency === "PLZ"
   )


  return (
    <div className={style.wrapper}>
      <div className={style.exchange}>
        <div className={style.exHead}>
          <p className={style.exHeadText}>Валюта</p>
          <p className={style.exHeadText}>Покупка</p>
          <p className={style.exHeadText}>Продажа</p>
        </div>
        <ul>
          {currencyArray.map((el, index) => {
            return (
              <li className={style.exData} key ={index}>
                <div className={style.exItem}>{`${el.currency}`}</div>
                <div className={style.exItem}>{`${Number(el.purchaseRate).toFixed(2)}`}</div>
                <div className={style.exItem}>{`${Number(el.saleRate).toFixed(2)}`}</div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={style.chart}>
        <div>
            {/* <img src="../src/Components/Currency/icons/bg.png"></img> */}
        </div>
      </div>
    </div>
  );
};

export default Currency;
