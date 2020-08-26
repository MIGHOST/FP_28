import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import GoogleButton from "../../Components/GoogleButton/GoogleButton";
import FacebookButton from "../../Components/FacebookButton/FacebookButton";
import styles from "./Login.module.css";
import { useMediaQuery } from "react-responsive";
import { createUserLogin } from "../../redux/operations/login";
import { saveToLocaleStorage } from "../../helpers/storage";

const formInitialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(formInitialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const status = useSelector((state) => state.session.user.status);

  const handleInput = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  console.log(status);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createUserLogin(form, history));
    saveToLocaleStorage("status", status);
    setForm(formInitialState);
  };
  const user = useSelector((state) => state.session.user);
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });
  const { email, password } = form;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/**----wrapper-left---- */}
        {!isTablet && (
          <div className={styles.wrapper_left}>
            <div className={styles.wrapper_phone}></div>
            <h2 className={styles.wrapper_left__title}>Finance App</h2>
          </div>
        )}

        {/**----wrapper-right---- */}
        <div className={styles.wrapper_right}>
          <div className={styles.wrapper_login}>
            <div className={styles.wrapper_title}>
              <div className={styles.img_logo}></div>
              <h2 className={styles.title}>Wallet</h2>
            </div>
            {/**----form---- */}
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.input_wrapper}>
                <div className={`${styles.icon} ${styles.icon_email}`}></div>
                <input
                  className={`${styles.input} ${styles.input_email}`}
                  placeholder="E-mail"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInput}
                />
              </div>

              <div className={styles.input_wrapper}>
                <div className={`${styles.icon} ${styles.icon_password}`}></div>
                <input
                  className={`${styles.input} ${styles.input_password}`}
                  placeholder="Пароль"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInput}
                />
              </div>
              {user.error && (
                <p className={styles.error}>
                  The password is invalid or the user does not registered.
                </p>
              )}

              <button type="submit" className={styles.buttom}>
                Войти
              </button>
            </form>
            <Link
              to="/registration"
              className={styles.link_registration}
              href="#"
            >
              Регистрация
            </Link>

            <div className={styles.login_box_social}>
              <div className={styles.social_box}>
                <GoogleButton />
                <FacebookButton />
              </div>
            </div>

            {isTablet && (
              <h2 className={styles.wrapper_left__title}>Finance App</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
