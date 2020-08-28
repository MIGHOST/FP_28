import { userTypes } from "../../constants";

export const loginUser = (user) => ({
  type: userTypes.LOGIN,
  payload: user,
});
export const loginUserWithGoogle = (user) => ({
  type: userTypes.LOGIN_WITH_GOOGLE,
  payload: user,
});

export const loginUserWithFacebook = (user) => ({
  type: userTypes.LOGIN_WITH_FACEBOOK,
  payload: user,
});

<<<<<<< HEAD
export const getCurrentUserWithToken = (user) => ({
  type: userTypes.GET_CURRENT_USER,
  payload: user,
});

export const userLogOut = () => ({ type: userTypes.LOG_OUT});
=======
export const LOG_OUT = "USER_LOG_OUT";

export const userLogOut = () => ({ type: LOG_OUT });
>>>>>>> origin/try

export const userError = (error) => ({
  type: userTypes.USER_ERROR,
  payload: error,
});
<<<<<<< HEAD

export const setUser = (user) => ({
  type: userTypes.REGISTER,
  payload: user,
});
=======
>>>>>>> origin/try
