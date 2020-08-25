<<<<<<< HEAD
import axios from "axios";

import storage from "../../helpers/storage";
import { loaderOn, loaderOff } from "./loader";

const token =
  storage.get("token") ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDI1MTAwZDE1ODA2MDAxNzcyZDIzZCIsImlhdCI6MTU5ODIxODgxMCwiZXhwIjoxNTk4MzA1MjEwfQ.GOjLBi_QZf5Muw5pnye5IjxmZwhViU5IMgULFz-8FuI";
=======
import { TRANSACTION_UPDATE, TRANSACTIONS_GET } from "../../constants";
>>>>>>> update-transaction

export const addTtansaction = (data) => ({
  type: "ADD_TRANSACTION",
  payload: data,
<<<<<<< HEAD
=======
});

export const getTransactionList = (transactions) => ({
  type: TRANSACTIONS_GET,
  payload: transactions,
});

export const editTransaction = (id, transaction) => ({
  type: TRANSACTION_UPDATE,
  payload: { id, transaction },
>>>>>>> update-transaction
});

export const setTransactionsList = (data) => ({
  type: "SET_TRANSACTIONS_LIST",
  payload: data,
});

export const asyncSetTransactionsList = () => async (dispatch) => {
  dispatch(loaderOn());
  try {
    const result = await axios.get(
      "https://powerful-waters-91620.herokuapp.com/get",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(setTransactionsList(result.data));
  } catch (e) {
    console.error("errroooorrr in asyncSetTransactionsList");
  } finally {
    dispatch(loaderOff());
  }
};
