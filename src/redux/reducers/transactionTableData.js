import {
	TRANSACTION_UPDATE,
	TRANSACTIONS_GET,
	ADD_TRANSACTION,
} from "../../constants";

const initialState = [
	{
		date: "2020-08-02",
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
	{
		date: "28.08.2020",
		type: "-",
		category: "Different",
		commentary: "Bla bla bla",
		sum: 8000.0,
		balance: 18000.0,
		id: 5,
	},
];

const tableData = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_TRANSACTION:
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
		default:
			return state;
	}
};

export default tableData;
