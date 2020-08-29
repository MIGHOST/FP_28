import React, { useState, useEffect } from "react";
import style from "./Currency.module.css";
import CurrencyTable from "./CurrencyTable";
import { getExchangeRate } from "../../api/kurstodayServices";
import { objToArray } from "../../helpers/convertator";

const Currency = () => {
  const [objOfExchange, setArrayOfExchange] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    getExchangeRate()
      .then((res) => {
        setArrayOfExchange(res.data);
      })
      .catch(console.error)
      .finally(setLoader(false));
  }, []);

  const currencyArray = objToArray(objOfExchange).filter(
    (el) => el["eur"] || el["usd"] || el["rur"] || el["pln"]
  );

  return (
    <div className={style.wrapper}>
      <div className={style.exchange}>
        <div className={style.exHead}>
          <p className={style.exHeadText}>Валюта</p>
          <p className={style.exHeadText}>Покупка</p>
          <p className={style.exHeadText}>Продажа</p>
        </div>
        {loader && (
          <div className={style.lds_ring}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <ul>
          {!loader &&
            currencyArray.map((el, index) => (
              <CurrencyTable el={el} key={index} index={index} />
            ))}
        </ul>
      </div>

      <div className={style.chart}></div>
    </div>
  );
};

export default Currency;
