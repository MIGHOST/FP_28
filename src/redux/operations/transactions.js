import {
  updateTransaction,
  getTransactions,
  setAuthToken,
  clearAuthToken,
  addTransaction,
  deleteTransaction,
} from "../../api/walletServices";
import {
  addTransactionToRedux,
  getTransactionList,
  editTransaction,
  deleteTransactionFromState,
} from "../actions/transactionTableData";
import { getFromLocaleStorage } from "../../helpers/storage";
import { filteredToken } from "../../helpers/convertator";
import { loaderOn, loaderOff } from "../actions/loader";
import { getUser } from "./login";

const token = filteredToken(
  getFromLocaleStorage("persist:auth-token")
    ? getFromLocaleStorage("persist:auth-token").token
    : ""
);

export const asyncAddTransaction = (newTransaction) => async (dispatch) => {
  dispatch(loaderOn());
  try {
    setAuthToken(token);
    const { data } = await addTransaction(newTransaction);
    dispatch(
      // addTransactionToRedux(newTransaction)
      addTransactionToRedux({ ...newTransaction, balance: data.userBalance })
    );
    dispatch(getUserTransactions());
  } catch (error) {
    console.log("Error adding ---->>", error);
  } finally {
    clearAuthToken();
    dispatch(loaderOff());
  }
};

export const updateUserTransaction = (id, transaction, token) => async (
  dispatch
) => {
  dispatch(loaderOn());

  try {
    setAuthToken(token);

    const { data } = await updateTransaction(id, transaction);

    dispatch(editTransaction(data._id, data));
    dispatch(getUserTransactions());
    dispatch(getUser());
  } catch (error) {
    console.log("Error update ---->>", error);
  } finally {
    clearAuthToken();
    dispatch(loaderOff());
  }
};

export const getUserTransactions = () => async (dispatch, getState) => {
  dispatch(loaderOn());

  const token = getState().session.token;

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
