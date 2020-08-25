import { userTypes } from "../../constants";

export const loginUser = ({ token, _id}) => ({
  type: userTypes.LOGIN,
  payload: { token, _id },
});
export const loginUserWithGoogle = ({ email, googleToken, _id }) => ({
  type: userTypes.LOGIN_WITH_GOOGLE,
  payload: { email, googleToken },
});

export const loginUserWithFacebook = ({ email, facebookToken }) => ({
  type: userTypes.LOGIN_WITH_FACEBOOK,
  payload: { email, facebookToken },
});
export const LOG_OUT = "USER_LOG_OUT";

export const userLogOut = () => ({ type: LOG_OUT });
