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
          <div className={styles.logo}></div>
          <h3 className={styles.title}>WALLET</h3>
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
          <div className={styles.login}>
            <Link to="/login">Войти</Link>
          </div>


          <div className={styles.login}>
        <h3 className={styles.social_title}>Войти c помощью</h3>
        <div className={styles.social_box}>
    
        <Link to="/google" className={styles}>
        <div className={styles.google_box}></div>
    
        </Link>
        <Link to="/facebook" className={styles}><div className={styles.fb_box}></div>
    </Link>
    </div>
      </div>

          {/* <div className={styles.socials}>
            <a href="google.com">
              <div className={styles.login100SocialItem}></div>
            </a>

            <a href="facebook.com">
              <div className={styles.link_fb}></div>
            </a>
          </div> */}
        </form>
      </div>
  
    </div>
  );
};

export default Registration;
