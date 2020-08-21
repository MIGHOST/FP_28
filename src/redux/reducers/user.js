import { userTypes } from "../../constants";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.LOGIN:
      return payload;
    case userTypes.LOGIN_WITH_GOOGLE:
      return payload;
    case userTypes.LOGIN_WITH_FACEBOOK:
      return payload;

      default:
        return state;
    }
      
  }
// import { LOG_OUT } from "../actions/user";

// const initialState = {
//   userName: "User",
//   email: "user@gmail.com",
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case LOG_OUT:
//       return { ...state, email: "" };

//     default:
//       return state;
//   }
// };
