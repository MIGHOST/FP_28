import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./Registration.module.css";
import { signUp } from "../../redux/operations/registration";

const formState = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
};

const Registration = () => {
  const [form, setForm] = useState(formState);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({ ...form, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(form));
  };

  return (
    <div className={styles.wrapper}>
      <aside className={styles.aside}>
        <div className={styles.iphone}></div>
        <p className={styles.titleApp}>Finance App</p>
      </aside>
      <div className={styles.formSectionWrapper}>
        <form onSubmit={formSubmit} className={styles.formWrapper}>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}></div>
            <h3 className={styles.title}>WALLET</h3>
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              className={styles.inputEmail}
              placeholder="E-mail"
              autoComplete="on"
              onChange={inputHandler}
              name="email"
            />
            <span className={styles.spanEmail}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </span>
          </div>
          <div className={styles.formGroup}>
            <input
              type="password"
              className={styles.inputPassword}
              placeholder="Пароль"
              autoComplete="off"
              onChange={inputHandler}
              name="password"
            />
            <span className={styles.spanPassword}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>
            </span>
          </div>
          <div className={styles.formGroup}>
            <input
              type="password"
              className={styles.inputConfirmPassword}
              placeholder="Подтвердите пароль"
              autoComplete="off"
              onChange={inputHandler}
              name="confirmPassword"
            />
            <span className={styles.spanConfirmPassword}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>
            </span>
            {form.confirmPassword && form.confirmPassword === form.password ? (
              <div className={styles.confirmed}></div>
            ) : (
              <div className={styles.confirmPasswordBar}></div>
            )}
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              className={styles.inputName}
              placeholder="Ваше имя"
              onChange={inputHandler}
              name="name"
            />
            <span className={styles.spanName}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </span>
          </div>

          <button type="submit" className={styles.button}>
            Регистрация
          </button>
          <div className={styles.login}>
            <Link to="/login">Войти</Link>
          </div>
          <div className={styles.socials}>
            <a href="google.com">
              <div className={styles.login100SocialItem}></div>
            </a>

            <a href="facebook.com">
              <div className={styles.link_fb}></div>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
