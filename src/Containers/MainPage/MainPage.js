import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Switch, Route, Redirect } from "react-router-dom";

import styles from "./MainPage.module.css";

import Navigation from "../../Components/Navigation/Navigation";
import TableTransaction from "../../Components/TableTransaction/TableTransaction";
import Currency from "../../Components/Currency/Currency";
import Balance from "../../Components/Balance/Balance";
import Header from "../../Components/Header/Header";
import AddTransaction from "../../Components/AddTransaction/AddTransaction";
import Statistic from "../../Components/Statistic/Statistic";
import Loading from "../../Components/Loader/Loader";
import debounce from "../../helpers/debounce";
import { screenSizes } from "../../constants";
import { useLocation } from "react-router-dom";

import { getUserTransactions } from "../../redux/operations/transactions";

const MainPage = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { pathname } = useLocation();
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setScreenWidth(window.innerWidth);
    }, 1000);
    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [screenWidth]);
  const loader = useSelector((state) => state.loader);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserTransactions());
  }, [dispatch]);

  const modalOpener = () => {
    if (modalOpen) return;
    setModalOpen(true);
  };

  const modalCloser = () => {
    if (!modalOpen) return;
    setModalOpen(false);
  };

  const isTablet = useMediaQuery({ query: "(max-width: 1279px)" });
  const isDesctop = useMediaQuery({ query: "(min-width: 1280px)" });

  return (
    <div className={modalOpen ? styles.noScroll : styles.wrapper}>
      <div className={styles.mainPage}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.navigation}>
          <Navigation />
        </div>
        {screenWidth < screenSizes.small && pathname === "/" && (
          <div className={styles.balance}>
            <Balance />
          </div>
        )}
        {screenWidth > screenSizes.small && (
          <div className={styles.balance}>
            <Balance />
          </div>
        )}

        <div className={styles.mainData}>
          <Switch>
            <Route
              path={`${props.match.path}/`}
              render={() => (
                <TableTransaction
                  modalOpener={modalOpener}
                  modalOpen={modalOpen}
                />
              )}
            />
            <Route
              path={`${props.match.path}statistic`}
              component={Statistic}
            /> 

            {isTablet ? (
              <Route
                path={`${props.match.path}currency`}
                render={() => (
                  <div className={styles.currency}>
                    <Currency />
                  </div>
                )}
              />
            ) : (
              <Redirect to="/" />
            )}
          </Switch>
        </div>
        <div className={styles.blockForMobileButton}></div>
        {isDesctop && (
          <div className={styles.currency}>
            <Currency />
          </div>
        )}
        {modalOpen && <AddTransaction modalCloser={modalCloser} />}
        {loader && <Loading />}
      </div>
    </div>
  );
};

export default MainPage;
