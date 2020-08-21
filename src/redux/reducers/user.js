import { userTypes } from "../../constants";

const initialState = {};

export default (state = initialState, {type, payload}) => {
  switch ( type ) {
    case userTypes.LOGIN:
      return payload;
    case userTypes.LOGIN_WITH_GOOGLE:
      return payload;
    case userTypes.LOGIN_WITH_FACEBOOK:
      return payload;
    default:
      return state;
  }
};
