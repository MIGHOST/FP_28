const initialState = [
  {
    date: "25.08.2020",
    type: "+",
    category: "Different",
    commentary: "Bla bla bla",
    sum: 1000.0,
    balance: 1000.0,
    id: 1,
  },
  {
    date: "26.08.2020",
    type: "-",
    category: "csggdgdgcsggdgdg",
    commentary: "Bla bla blaBla bla bla",
    sum: 100.0,
    balance: 1800.0,
    id: 2,
  },
  {
    date: "27.08.2020",
    type: "-",
    category: "Different",
    commentary: "Bla bla bla",
    sum: 800.0,
    balance: 1000.0,
    id: 3,
  },
  {
    date: "28.08.2020",
    type: "+",
    category: "Different",
    commentary: "Bla bla bla",
    sum: 8000.0,
    balance: 18000.0,
    id: 4,
  },
];

const tableData = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tableData;
