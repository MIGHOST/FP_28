import React from "react";

import Navigation from "../../Components/Navigation/Navigation";
import TableTransaction from "../../Components/TableTransaction/TableTransaction";
import AddButton from "../../Components/AddButton/AddButton";
import Currency from "../../Components/Currency/Currency";

import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainPage}>
        <Navigation />
        <TableTransaction />
        <AddButton />
        <Currency />
      </div>
    </div>
  );
};

export default MainPage;
