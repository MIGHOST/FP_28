import { combineReducers } from "redux";
import user from "./user";
import tableData from "./transactionTableData";
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

const rootReducer = combineReducers({
  session: persistReducer(authPersistConfig, session),
  tableData,
  loader,
});

export default rootReducer;
