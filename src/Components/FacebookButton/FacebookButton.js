import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from "axios";
import styles from "./FacebookButton.module.css";

const FacebookButton = () => {
  const responseFacebook = async (response) => {
    try {
      const { accessToken } = response;

      const body = {
        accessToken,
      };

      const { data } = await axios.post(
        "https://powerful-waters-91620.herokuapp.com/auth/facebook",
        body
      );

      console.log("FACEBOOK LOGIN GOOD");

      console.log(data);
    } catch (error) {
      console.log("FACEBOOK LOGIN FAILED");
      console.error(error);
    }
  };

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FACEBOOK_APP_ID}
      fields="name,email,picture"
      callback={responseFacebook}
      autoLoad={false}
      render={(renderProps) => (
        <button
          onClick={renderProps.onClick}
          className={styles.facebook_button}
        ></button>
      )}
    />
  );
};

export default FacebookButton;
