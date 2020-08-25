import React, { useState, useEffect, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Navigation from "../../Components/Navigation/Navigation";
import TableTransaction from "../../Components/TableTransaction/TableTransaction";
import Currency from "../../Components/Currency/Currency";
import Balance from "../../Components/Balance/Balance";
import Header from "../../Components/Header/Header";
import AddTransaction from "../../Components/AddTransaction/AddTransaction";
import Loading from "../../Components/Loader/Loader";

import { getUserTransactions } from "../../redux/operations/transactions";
import styles from "./MainPage.module.css";

const Statistic = lazy(() =>
  import(
    "../../Components/Statistic/Statistic" /* webpackChunkName: "Statistic" */
  )
);

const MainPage = () => {
  const loader = useSelector((state) => state.loader);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserTransactions());
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
        <div className={styles.mainData}>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <TableTransaction modalOpener={modalOpener} />}
              />
              <Route path="/statistics" component={Statistic} />
            </Switch>
          </Suspense>
        </div>

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
