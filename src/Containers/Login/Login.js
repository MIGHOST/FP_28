import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import GoogleButton from "../../Components/GoogleButton/GoogleButton";
import FacebookButton from "../../Components/FacebookButton/FacebookButton";
import styles from "./Login.module.css";
import { useMediaQuery } from "react-responsive";
import axios from "axios";

const formInitialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(formInitialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleInput = (e) => {
    const { value, name } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://powerful-waters-91620.herokuapp.com/auth/login",
        form
      );

      console.log(data);
    } catch (error) {
      console.error(error);
    }

    setForm({ email: "", password: "", confirmPassword: "", name: "" });
  };

  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });

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
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleInput}
                />
              </div>

              <div className={styles.input_wrapper}>
                <div className={`${styles.icon} ${styles.icon_password}`}></div>
                <input
                  className={`${styles.input} ${styles.input_password}`}
                  placeholder="Пароль"
                  type="text"
                  name="password"
                  value={form.password}
                  onChange={handleInput}
                />
              </div>

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

                {/* <Link to="/google">
                  <div className={styles.google_box}></div>
                </Link>
                <Link to="/facebook">
                  <div className={styles.fb_box}></div>
                </Link> */}
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
