import {
  updateTransaction,
  getTransactions,
  setAuthToken,
  clearAuthToken,
  deleteTransaction,
} from "../../api/walletServices";
import {
  getTransactionList,
  editTransaction,
  deleteTransactionFromState,
} from "../actions/transactionTableData";
import { loaderOn, loaderOff } from "../actions/loader";
import { getFromLocaleStorage } from "../../helpers/storage";
import { convertToNull } from "../../helpers/convertator";

const token =
  convertToNull(getFromLocaleStorage("persist:auth-token").token) ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDI1MTAwZDE1ODA2MDAxNzcyZDIzZCIsImlhdCI6MTU5ODM2NjIxMywiZXhwIjoxNTk4NDUyNjEzfQ.48_5PEEzftBsjQqpDWNwTMu1fPtrgBJzaU90de5-xfo";

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

export const deleteUsersTransaction = (id) => async (dispatch) => {
  dispatch(loaderOn());
  try {
    setAuthToken(token);
    await deleteTransaction(id);
    dispatch(deleteTransactionFromState(id));
  } catch (error) {
    console.log("Error delete ---->>", error);
  } finally {
    clearAuthToken();
    dispatch(loaderOff());
  }
};
