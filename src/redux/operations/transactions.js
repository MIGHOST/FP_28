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
import { filteredToken } from "../../helpers/convertator";

const token = filteredToken(
  getFromLocaleStorage("persist:auth-token")
    ? getFromLocaleStorage("persist:auth-token").token
    : ""
);

export const updateUserTransaction = (id, transaction) => async (dispatch) => {
  dispatch(loaderOn());
  try {
    setAuthToken(token);

    const { data } = await updateTransaction(id, transaction);

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
