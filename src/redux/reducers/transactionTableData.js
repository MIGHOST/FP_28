<<<<<<< HEAD
import { TRANSACTION_UPDATE, TRANSACTIONS_GET } from "../../constants";

const initialState = [];

const tableData = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TRANSACTION":
      return [...state, payload];
    case TRANSACTIONS_GET: {
      return payload;
    }
    case TRANSACTION_UPDATE: {
      return state.map((transaction) =>
        transaction._id === payload.id
          ? { ...transaction, ...payload.transaction }
          : transaction
      );
    }
=======
const initialState = [];

const tableData = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [...state, action.payload];
    case "SET_TRANSACTIONS_LIST":
      return action.payload;
>>>>>>> remotes/origin/F4-5-6-8-9
    default:
      return state;
  }
};

export default tableData;
