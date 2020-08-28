<<<<<<< HEAD
import {
  TRANSACTION_UPDATE,
  TRANSACTIONS_GET,
  ADD_TRANSACTION,
  TRANSACTION_DELETE,
} from "../../constants";

export const addTransactionToRedux = (data) => ({
  type: ADD_TRANSACTION,
=======
import { TRANSACTION_UPDATE, TRANSACTIONS_GET } from "../../constants";
import axios from "axios";

import storage from "../../helpers/storage";
import { loaderOn, loaderOff } from "./loader";

const token =
  storage.get("token") ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDI1MTAwZDE1ODA2MDAxNzcyZDIzZCIsImlhdCI6MTU5ODIxODgxMCwiZXhwIjoxNTk4MzA1MjEwfQ.GOjLBi_QZf5Muw5pnye5IjxmZwhViU5IMgULFz-8FuI";

export const addTtansaction = (data) => ({
  type: "ADD_TRANSACTION",
>>>>>>> origin/try
  payload: data,
});

export const getTransactionList = (transactions) => ({
  type: TRANSACTIONS_GET,
  payload: transactions,
});

export const editTransaction = (id, transaction) => ({
  type: TRANSACTION_UPDATE,
  payload: { id, transaction },
});

export const deleteTransactionFromState = (id) => ({
  type: TRANSACTION_DELETE,
  payload: id,
});
