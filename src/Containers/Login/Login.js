import React from "react";
import style from "./Login.module.css";
import { useMediaQuery } from "react-responsive";

const Login = () => {
  const isDesktop = useMediaQuery({ query: "(max-width: 1280px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 320px)",
  });

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {/**----wrapper-left---- */}
        {!isTablet && (
          <div className={style.wrapper_left}>
            <div className={style.wrapper_phone}></div>
            <h2 className={style.wrapper_left__title}>Finance App</h2>
          </div>
        )}

        {/**----wrapper-right---- */}
        <div className={style.wrapper_right}>
          <div className={style.wrapper_login}>
            <div className={style.wrapper_title}>
              <div className={style.img_logo}></div>
              <h2 className={style.title}>Wallet</h2>
            </div>
            {/**----form---- */}
            <form className={style.form}>
              <div className={style.input_wrapper}>
                <div className={`${style.icon} ${style.icon_email}`}></div>
                <input
                  className={`${style.input} ${style.input_email}`}
                  placeholder="E-mail"
                />
              </div>

              <div className={style.input_wrapper}>
                <div className={`${style.icon} ${style.icon_password}`}></div>
                <input
                  className={`${style.input} ${style.input_password}`}
                  placeholder="Пароль"
                />
              </div>

              <button type="submit" className={style.buttom}>
                Войти
              </button>
            </form>
            <a className={style.link_registation} href="#">
              Регистрация
            </a>
          </div>

          {isTablet && (
            <h2 className={style.wrapper_left__title}>Finance App</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
