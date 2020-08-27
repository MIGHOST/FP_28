import React from "react";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { LogOutUser } from "../../redux/operations/login";
import { useHistory } from "react-router-dom";
import { paths } from "../../constants";

const Header = () => {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const logOut = () => {
    dispatch(LogOutUser());
    history.push(paths.login);
  };
  return (
    user.email !== "" && (
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logo}></div>

          <nav className={styles.nav}>
            <a href="#" className={styles.siteLogo}>
              Wallet
            </a>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <p className={styles.navLink}>{`${user.name}`}</p>
              </li>
              <li className={styles.navItem}>
                <div className={styles.navLinkImg} onClick={logOut}></div>
              </li>

              <li className={styles.navItem}>
                <div className={styles.navLink} onClick={logOut}>
                  log out
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  );
};
export default Header;
