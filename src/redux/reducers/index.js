import { combineReducers } from "redux";
import user from "./user";
import tableData from "./transactionTableData";


const rootReducer = combineReducers({
  user,
  tableData,
});

export default rootReducer;
