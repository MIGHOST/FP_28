import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GoogleButton from "../../Components/GoogleButton/GoogleButton";
import FacebookButton from "../../Components/FacebookButton/FacebookButton";
import styles from "./Registration.module.css";
import { signUp } from "../../redux/operations/registration";
import PasswordStrengthMeter from "../../Components/PasswordStrengthMeter/PasswordStrengthMeter";
import { useMediaQuery } from "react-responsive";
const formState = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
};

const Registration = () => {
  const [form, setForm] = useState(formState);
  const dispatch = useDispatch();
  const history = useHistory();
  const userError = useSelector((state) => state.session.user);

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUp(form, history));
    setForm(formState);
  };
  const isTablet = useMediaQuery({ query: "(max-width: 1060px)" });
  const { email, password, confirmPassword, name } = form;

  return (
    <div className={styles.wrapper}>
      {!isTablet && (
        <div className={styles.wrapper_left}>
          <div className={styles.wrapper_phone}></div>
          <h2 className={styles.wrapper_left__title}>Finance App</h2>
        </div>
      )}

      <div className={styles.wrapper_right}>
        <div className={styles.wrapper_registration}>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}></div>
            <h3 className={styles.title}>Wallet</h3>
          </div>
          <form onSubmit={formSubmit} className={styles.formWrapper}>
            <div className={styles.formGroup}>
              <input
                type="email"
                className={styles.inputEmail}
                placeholder="E-mail"
                autoComplete="on"
                onChange={inputHandler}
                name="email"
                value={email}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="password"
                className={styles.inputPassword}
                placeholder="Пароль"
                autoComplete="off"
                onChange={inputHandler}
                name="password"
                value={password}
              />
            </div>
            <div className={styles.formGroupConfirm}>
              <input
                type="password"
                className={styles.inputConfirmPassword}
                placeholder="Подтвердите пароль"
                autoComplete="off"
                onChange={inputHandler}
                name="confirmPassword"
                value={confirmPassword}
              />
            </div>
            <PasswordStrengthMeter password={form.password} />

            <div className={styles.formGroup}>
              <input
                type="text"
                className={styles.inputName}
                placeholder="Ваше имя"
                onChange={inputHandler}
                name="name"
                value={name}
              />
            </div>
            <p className={styles.error}>
              {userError.error ? userError.error.data.message : ""}
            </p>
            <button type="submit" className={styles.button}>
              Регистрация
            </button>
            <div className={styles.login}>
              <Link to="/login">Войти</Link>
            </div>
          </form>
          <div className={styles.login}>
            <div className={styles.social_box}>
              <GoogleButton />
              <FacebookButton />
            </div>
          </div>
        </div>
        {isTablet && (
          <h2 className={styles.wrapper_left__title}>Finance App</h2>
        )}
      </div>
    </div>
  );
};

export default Registration;
