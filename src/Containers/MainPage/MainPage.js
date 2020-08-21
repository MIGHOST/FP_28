import React from "react";

import Navigation from "../../Components/Navigation/Navigation";
import TableTransaction from "../../Components/TableTransaction/TableTransaction";
import AddButton from "../../Components/AddButton/AddButton";
import Currency from "../../Components/Currency/Currency";

import styles from "./MainPage.module.css";
import Balance from "../../Components/Balance/Balance";

const MainPage = () => {
  console.log(window);
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainPage}>
        <Navigation />
        <Balance />
        <div className={styles.transactionTable}>
          <TableTransaction />
        </div>
        <AddButton />
        <div className={styles.currency}>
          <Currency />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
