import { combineReducers } from "redux";
import user from "./user";
import tableData from "./transactionTableData";
import loader from "./loader";

const rootReducer = combineReducers({
  user,
  tableData,
  loader,
});

export default rootReducer;
