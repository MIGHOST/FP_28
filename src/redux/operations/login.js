import { paths } from "../../constants";
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
    history.push(paths.mainPage);
  } catch (error) {
    dispatch(userError(error.message));
    // console.log(error.message);
  }
};

export const loginWithGoogle = (formData, history) => async (dispatch) => {
  try {
    const loginResult = await loginToWalletWithGoogle(formData);
    const user = loginResult.data;
    dispatch(loginUserWithGoogle(user));
    history.push(paths.mainPage);
  } catch (error) {
    dispatch(userError(error));
  }
};

export const loginWithFacebook = (formData, history) => async (dispatch) => {
  try {
    const loginResult = await loginToWalletWithFacebook(formData);

    const user = loginResult.data;
    dispatch(loginUserWithFacebook(user));
    history.push(paths.mainPage);
  } catch (error) {
    dispatch(userError(error));
  }
};
