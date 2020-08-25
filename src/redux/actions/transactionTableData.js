import { TRANSACTION_UPDATE, TRANSACTIONS_GET } from "../../constants";

import { addTransaction } from "../../api/walletServices";

export const addTransactionToRedux = (data) => ({
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

export const asyncAddTransaction = (newTransaction) => async (dispatch) => {
	try {
		await addTransaction(newTransaction).then((data) => console.log(data));
	} catch (error) {
		console.log(error);
	}
};
// export const registerUser = (userInfo) => async (dispatch) => {
// 	const { email, password, displayName, photoURL } = userInfo;
// 	try {
// 		const resalt = {
// 			...(await auth.createUserWithEmailAndPassword(email, password)),
// 			...(await auth.currentUser.updateProfile({
// 				displayName,
// 				email,
// 				photoURL,
// 			})),
// 		};
// 		console.log(resalt);
// 		const authUser = {
// 			displayName: resalt.user.displayName,
// 			email: resalt.user.email,
// 			photoURL: resalt.user.photoURL,
// 		};
// 		dispatch(setUser(authUser));
// 		dispatch(setToken(resalt.user.refreshToken));
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
