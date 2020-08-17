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
      <div className={styles.logo}></div>
      <h3 className={styles.title}>WALLET</h3>
      <form onSubmit={formSubmit} className={styles.formWrapper}>
        <div className={styles.formGroup}>
          <input
            type="email"
            className={styles.inputEmail}
            placeholder="E-mail"
            autoComplete="on"
            onChange={inputHandler}
            name="email"
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
          />
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
        </div>

        <button type="submit" className={styles.button}>
          Регистрация
        </button>
      </form>
      <div className={styles.login}>
        <Link to="/login">Войти</Link>
      </div>
    </div>
  );
};

export default Registration;
