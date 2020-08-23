const initialState = [];

const tableData = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [...state, action.payload];
    case "SET_TRANSACTIONS_LIST":
      return action.payload;
    default:
      return state;
  }
};

export default tableData;
