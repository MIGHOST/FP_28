import { setUser, userError } from "../actions/user";
import { paths } from "../../constants";
// import { setToken } from "../actions/token";
import { registerToWallet, setAuthToken } from "../../api/walletServices";

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const result = await registerToWallet(formData);
    console.log(result);
    const { id, email, token } = result.data.user;
    dispatch(setUser({ id, email }));
    //   dispatch(setToken(token));

    dispatch(setAuthToken(token));
    localStorage.setItem("token", JSON.stringify(token));
    history.push(paths.mainPage);
  } catch (error) {
    dispatch(userError(error));
    console.log(error);
  }
};

// export const signUp = (formData) => async (dispatch, getState) => {
//   options.headers.authorization = getState().token;
//   //   console.log(options.headers.authorization);
//   const result = await registerToWallet(formData);
//   console.log(result);
//   const { id, email, token } = result.data.user;
//   dispatch(setUser({ id, email }));
//   //   dispatch(setToken(token));

//   dispatch(setAuthToken(token));
//   localStorage.setItem("token", JSON.stringify(token));
// };
