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

export const updateUserTransaction = (id, transaction, token) => async (
  dispatch
) => {
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
