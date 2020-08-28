import { combineReducers } from "redux";
import user from "./user";
import tableData from "./transactionTableData";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/try
import token from "./token";
import loader from "./loader";
import statistic from "./statistic";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth-token",
  storage,
  whitelist: "token",
};
<<<<<<< HEAD

const authPersistConfigStatus = {
  key: "status",
  storage,
  whitelist: "status",
};

const session = combineReducers({
  user: persistReducer(authPersistConfigStatus, user),
  token,
});
=======
=======
import loader from "./loader";
>>>>>>> remotes/origin/F4-5-6-8-9
>>>>>>> origin/try

const rootReducer = combineReducers({
  session: persistReducer(authPersistConfig, session),
  tableData,
  loader,
  statistic,
});

export default rootReducer;
