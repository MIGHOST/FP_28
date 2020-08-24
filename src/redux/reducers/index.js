import { combineReducers } from "redux";
import user from "./user";
import tableData from "./transactionTableData";
<<<<<<< HEAD
import token from "./token";
import loader from "./loader";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const session = combineReducers({
  user,
  token,
});

const authPersistConfig = {
  key: "auth-token",
  storage,
  whitelist: "token",
};
=======
import loader from "./loader";
>>>>>>> remotes/origin/F4-5-6-8-9

const rootReducer = combineReducers({
  session: persistReducer(authPersistConfig, session),
  tableData,
  loader,
});

export default rootReducer;
