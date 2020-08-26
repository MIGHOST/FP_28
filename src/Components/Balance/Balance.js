import React from "react";
import style from "./Balance.module.css";
import { useSelector } from "react-redux";

const Balance = () => {
  const user = useSelector((state) => state.session.user);
  return (
    <div className={style.navContainer}>
      <div className={style.balance}>
        <p>Баланс</p>
        <p>{`${user.userBalance}` && 0} грн</p>
      </div>
    </div>
  );
};

export default Balance;
