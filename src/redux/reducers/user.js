import { LOG_OUT } from "../actions/user";

const initialState = {
  userName: "User",
  email: "user@gmail.com",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_OUT:
      return { ...state, email: "" };

    default:
      return state;
  }
};
