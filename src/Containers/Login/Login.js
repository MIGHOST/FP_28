import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useMediaQuery } from "react-responsive";

const Login = () => {
//   const isDesktop = useMediaQuery({ query: "(max-width: 1280px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });
//   const isMobileDevice = useMediaQuery({
//     query: "(max-device-width: 767px)",
//   });
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
            <form className={styles.form}>
              <div className={styles.input_wrapper}>
                <div className={`${styles.icon} ${styles.icon_email}`}></div>
                <input
                  className={`${styles.input} ${styles.input_email}`}
                  placeholder="E-mail"
                />
              </div>

              <div className={styles.input_wrapper}>
                <div className={`${styles.icon} ${styles.icon_password}`}></div>
                <input
                  className={`${styles.input} ${styles.input_password}`}
                  placeholder="Пароль"
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
              <h3 className={styles.social_title}>Войти c помощью</h3>
              <div className={styles.social_box}>
                <Link to="/google">
                  <div className={styles.google_box}></div>
                </Link>
                <Link to="/facebook">
                  <div className={styles.fb_box}></div>
                </Link>
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
