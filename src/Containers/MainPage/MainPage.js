import React, { useState, Suspense } from "react";
import {Switch, Route} from "react-router-dom"
import styles from './MainPage.module.css';
import Navigation from "../../Components/Navigation/Navigation";
import TableTransaction from "../../Components/TableTransaction/TableTransaction";
import AddButton from "../../Components/AddButton/AddButton";
import Currency from "../../Components/Currency/Currency";
import Balance from "../../Components/Balance/Balance";
import Header from "../../Components/Header/Header";
import AddTransaction from "../../Components/AddTransaction/AddTransaction";
import Statistic from '../../Components/Statistic/Statistic'


const MainPage = (props) => {
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
        <Header />
        <Navigation />
        <Balance />
        <div className={styles.transactionTable}>
          <Suspense fallback={<p>...Loading</p>}>
        <Switch>
          <Route path={`${props.match.path}/`} component={TableTransaction}/>
          <Route path={`${props.match.path}statistic`} component={Statistic}/>
          <Route path={`${props.match.path}currency`} component={Currency}/>
      </Switch>
      </Suspense>
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
