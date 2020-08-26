import React, { useState, useEffect } from "react";
import { Link, useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GoogleButton from "../../Components/GoogleButton/GoogleButton";
import FacebookButton from "../../Components/FacebookButton/FacebookButton";
import styles from "./Registration.module.css";
import { signUp } from "../../redux/operations/registration";
import PasswordStrengthMeter from "../../Components/PasswordStrengthMeter/PasswordStrengthMeter";

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
  const userError = useSelector(state => state.session.user);

  const inputHandler = (e) => {
    const {value, name} = e.target
    setForm({ ...form, [name]: value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUp(form, history));
    setForm(formState)
  };

  const { email, password, confirmPassword, name } = form;
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

            {/* {form.confirmPassword && form.confirmPassword === form.password ? (
              <div className={styles.confirmed}></div>
            ) : (
              <div className={styles.confirmPasswordBar}></div>
            )} */}
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
          <p className={styles.error}>{userError.error ? userError.error.data.message : ""}</p>
          <button type="submit" className={styles.button}>
            Регистрация
          </button>
          <div className={styles.login}>
            <Link to="/login">Войти</Link>
          </div>
        </form>
        <div className={styles.login}>
          <h3 className={styles.social_title}>Войти c помощью</h3>
          <div className={styles.social_box}>
            <GoogleButton />
            <FacebookButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
