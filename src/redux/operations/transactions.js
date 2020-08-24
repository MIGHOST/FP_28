import {
  updateTransaction,
  getTransactions,
  setAuthToken,
  clearAuthToken,
} from "../../api/walletServices";
import {
  getTransactionList,
  editTransaction,
} from "../actions/transactionTableData";
import { loaderOn, loaderOff } from "../actions/loader";
import { getFromLocaleStorage } from "../../helpers/storage";
import { convertToNull } from "../../helpers/convertator";

const token =
  convertToNull(getFromLocaleStorage("persist:auth-token").token) ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDI4YmFmNGM5ZTFiMDAxN2NhYzYyNSIsImlhdCI6MTU5ODIwMjcwMywiZXhwIjoxNTk4Mjg5MTAzfQ.wwl6TNx8C8ZlwHACrPtTXxEegJDVx0gcN50UyIaLkg0";

export const updateUserTransaction = (id, transaction) => async (dispatch) => {
  dispatch(loaderOn());
  try {
    setAuthToken(token);

    const { data } = await updateTransaction(id, transaction);

    console.log(data);

    dispatch(editTransaction(data._id, data));
    dispatch(getUserTransactions());
  } catch (error) {
    console.log("Error update ---->>", error);
  } finally {
    clearAuthToken();
    dispatch(loaderOff());
  }
};

export const getUserTransactions = () => async (dispatch) => {
  dispatch(loaderOn());
  try {
    setAuthToken(token);

    const { data } = await getTransactions();

    dispatch(getTransactionList(data));
  } catch (error) {
    console.log("Error get ---->>", error);
  } finally {
    clearAuthToken();
    dispatch(loaderOff());
  }
};
