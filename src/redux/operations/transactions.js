import {
	updateTransaction,
	getTransactions,
	setAuthToken,
	clearAuthToken,
	addTransaction,
} from "../../api/walletServices";
import {
	addTransactionToRedux,
	getTransactionList,
	editTransaction,
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
		console.log(data);
		dispatch(addTransactionToRedux(newTransaction));
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
