import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import styles from "./GoogleButton.module.css";

const GoogleButton = () => {
  const responseGoogle = async (response) => {
    try {
      const { accessToken } = response;

      const body = {
        accessToken,
      };

      const { data } = await axios.post(
        "https://powerful-waters-91620.herokuapp.com/auth/google",
        // "http://localhost:4242/auth/google",
        body
      );

      console.log("GOOGLE LOGIN GOOD");
      console.log(data);
    } catch (error) {
      console.log("GOOGLE LOGIN FAILED");
      console.error(error);
    }
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_ID}
      render={(renderProps) => (
        <button
          onClick={renderProps.onClick}
          className={styles.google_box}
        ></button>
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      autoLoad={false}
      // style={styles.google_box}
    />
  );
};

export default GoogleButton;
