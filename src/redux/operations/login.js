import axios from "axios";
// const { loginToWallet } = require("../../api/walletServices");
const { loginUser, userError } = require("../actions/user");

// export const createUserLogin = (user, history)=> async (dispatch) => {
//     const {email, password} = user;
//     try {
//         const loginResult = await loginToWallet(email, password);
//         console.log(loginResult);
//         const userHaveToken = {
//             email: loginResult.user.email,
//             _id: loginResult.user._id,
//         }
//         dispatch(loginUser(userHaveToken))
//     } catch (error) {
//         dispatch(userError(error))
//     }
// }

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const createUserLogin = (formData) => async (dispatch, getState) => {
  options.headers.autorization = getState().token;
  // const {email, password} = user;
  try {
    const loginResult = await axios.post(
      "https://powerful-waters-91620.herokuapp.com/auth/login",
      formData,
      options
    );

    console.log(loginResult);
    const {id, email} = loginResult.data.user;
    dispatch(loginUser(id, email));
    console.log("DO IT!!!");
  } catch (error) {
    dispatch(userError(error));
  }
};
