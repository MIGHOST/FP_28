import React from "react";
import style from "./Navigation.module.css";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
  const location = useLocation();
  const user = useSelector((state) => state.session.user);

  return (
    <div>
      <div className={style.pc}>
        <div className={style.navContainer}>
          <Link
            to={{ pathname: `/`, state: { from: location } }}
            className={style.navItem_link}
          >
            <div className={style.navItem}>
              <div className={style.navItem_house}></div>
              <p className={style.navItem_text}>Главная</p>
            </div>
          </Link>
          <Link
            to={{ pathname: `/statistic`, state: { from: location } }}
            className={style.navItem_link}
          >
            <div className={style.navItem}>
              <div className={style.navItem_chart}></div>
              <p className={style.navItem_text}>Статистика</p>
            </div>
          </Link>
        </div>
      </div>

      <div className={style.tab}>
        <div className={style.tab_container}>
          <Link
            to={{ pathname: `/`, state: { from: location } }}
            className={style.tab_navItem}
          >
            <div className={style.tab_navItem}>
              <div className={style.tab_navItem_house}></div>
              <p className={style.tab_navItem_text}>Главная</p>
            </div>
          </Link>
          <div className={style.tab_dash}></div>
          <Link
            to={{ pathname: `/statistic`, state: { from: location } }}
            className={style.tab_navItem}
          >
            <div className={style.tab_navItem}>
              <div className={style.tab_navItem_chart}></div>
              <p className={style.tab_navItem_text}>Статистика</p>
            </div>
          </Link>
          <div className={style.tab_dash}></div>
          <Link
            to={{ pathname: `/currency`, state: { from: location } }}
            className={style.tab_navItem}
          >
            <div className={style.tab_navItem}>
              <div className={style.tab_navItem_dollar}></div>
              <p className={style.tab_navItem_text}>Курс валют</p>
            </div>
          </Link>
          <div className={style.tab_dash}></div>
          <div className={style.tab_balance}>
            <p>Баланс </p>
            <p>{`: ${user.userBalance} грн`}</p>
          </div>
        </div>
      </div>

      <div className={style.mob}>
        <div className={style.mob_container}>
          <Link to={{ pathname: `/`, state: { from: location } }}>
            <div className={style.mob_navItem}>
              <div className={style.mob_navItem_house}></div>
            </div>
          </Link>
          <Link to={{ pathname: `/statistic`, state: { from: location } }}>
            <div className={style.mob_navItem}>
              <div className={style.mob_navItem_chart}></div>
            </div>
          </Link>
          <Link to={{ pathname: `/currency`, state: { from: location } }}>
            <div className={style.mob_navItem}>
              <div className={style.mob_navItem_dolar}></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
