import React from "react";
import styles from "./MainPage.module.css";

import Navigation from "../../Components/Navigation/Navigation";
import TableTransaction from "../../Components/TableTransaction/TableTransaction";
import AddButton from "../../Components/AddButton/AddButton";
import Currency from "../../Components/Currency/Currency";
import Balance from "../../Components/Balance/Balance";
import Header from "../../Components/Header/Header";

const MainPage = () => {
  console.log(window);
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainPage}>
        <Header />
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
