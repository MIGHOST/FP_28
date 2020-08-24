import { TRANSACTION_UPDATE, TRANSACTIONS_GET } from "../../constants";

export const addTtansaction = (data) => ({
  type: "ADD_TRANSACTION",
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
