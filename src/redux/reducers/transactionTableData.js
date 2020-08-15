const initialState = [
  {
    date: "25.08.2020",
    type: "+",
    category: "Different",
    commentary: "Bla bla bla",
    sum: 1000.0,
    balance: 1000.0,
  },
];

const tableData = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tableData;
