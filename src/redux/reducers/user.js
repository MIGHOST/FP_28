import { userTypes } from "../../constants";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case userTypes.LOGIN:
      return action.payload;
    case userTypes.LOGIN_WITH_GOOGLE:
      return action.payload;
    case userTypes.LOGIN_WITH_FACEBOOK:
      return action.payload;
    case userTypes.USER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
