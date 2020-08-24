// import axios from "axios";
// import { setToken } from "../actions/token";
const {
  loginToWallet,
  loginToWalletWithGoogle,
  loginToWalletWithFacebook,
} = require("../../api/walletServices");
const {
  loginUser,
  loginUserWithGoogle,
  loginUserWithFacebook,
  userError,
} = require("../actions/user");

export const createUserLogin = (formData, history) => async (dispatch) => {
  try {
    const loginResult = await loginToWallet(formData);
    const user = loginResult.data;
    dispatch(loginUser(user));
  } catch (error) {
    dispatch(userError(error));
  }
};

export const loginWithGoogle = (formData, history) => async (dispatch) => {
  try {
    const loginResult = await loginToWalletWithGoogle(formData);
    const user = loginResult.data;
    dispatch(loginUserWithGoogle(user));
  } catch (error) {
    dispatch(userError(error));
  }
};

export const loginWithFacebook = (formData, history) => async (dispatch) => {
  try {
    const loginResult = await loginToWalletWithFacebook(formData);

    const user = loginResult.data;
    dispatch(loginUserWithFacebook(user));
  } catch (error) {
    dispatch(userError(error));
  }
};

// const options = {
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

// export const createUserLogin = (formData) => async (dispatch) => {

//   try {
//     const loginResult = await axios.post(
//       "https://powerful-waters-91620.herokuapp.com/auth/login",
//       formData,
//       options
//     );

//     console.log(loginResult.data);
//     dispatch(loginUser(loginResult.data));
//     console.log("DO IT!!!");
//   } catch (error) {
//     dispatch(userError(error));
//   }
// };
