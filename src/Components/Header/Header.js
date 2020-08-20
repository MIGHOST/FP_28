import React from "react";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { userLogOut } from "../../redux/actions/user";

const Header = () => {
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logOut = () => {
    // console.log("sadsad");
    dispatch(userLogOut());
  };
  return (
    currentUser.email !== "" && (
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logo}></div>

          <nav className={styles.nav}>
            <a href="#" className={styles.siteLogo}>
              Wallet
            </a>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>
                  {" "}
                  {currentUser.userName}
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLinkImg} onClick={logOut}></a>
              </li>

              <li className={styles.navItem}>
                <a href="#" className={styles.navLink} onClick={logOut}>
                  log out
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  );
};
export default Header;
