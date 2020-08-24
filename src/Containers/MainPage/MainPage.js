
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../../Components/Navigation/Navigation";
import TableTransaction from "../../Components/TableTransaction/TableTransaction";
import AddButton from "../../Components/AddButton/AddButton";
import Currency from "../../Components/Currency/Currency";
import Balance from "../../Components/Balance/Balance";
import Header from "../../Components/Header/Header";
import AddTransaction from "../../Components/AddTransaction/AddTransaction";
import Loading from "../../Components/Loader/Loader";

import { asyncSetTransactionsList } from "../../redux/actions/transactionTableData";
import styles from "./MainPage.module.css";

const MainPage = () => {
  const loader = useSelector((state) => state.loader);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncSetTransactionsList());
  }, []);

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
        <Header />
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
        {loader && <Loading />}
      </div>
    </div>
  );
};

export default MainPage;
