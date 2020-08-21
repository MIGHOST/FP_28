import React, { useState } from "react";

import Navigation from "../../Components/Navigation/Navigation";
import TableTransaction from "../../Components/TableTransaction/TableTransaction";
import AddButton from "../../Components/AddButton/AddButton";
import Currency from "../../Components/Currency/Currency";
import Balance from "../../Components/Balance/Balance";
import AddTransaction from "../../Components/AddTransaction/AddTransaction";

import styles from "./MainPage.module.css";

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const modalOpener = () => {
    if (modalOpen) return;
    setModalOpen(true);
  };

  const modalCloser = () => {
    if (!modalOpen) return;
    setModalOpen(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainPage}>
        <Navigation />
        <Balance />
        <div className={styles.transactionTable}>
          <TableTransaction />
        </div>
        <AddButton modalOpener={modalOpener} />
        <div className={styles.blockForMobileButton}></div>
        <div className={styles.currency}>
          <Currency />
        </div>
        {modalOpen && <AddTransaction modalCloser={modalCloser} />}
      </div>
    </div>
  );
};

export default MainPage;
