import axios from "axios";

export const addTtansaction = (data) => ({
	type: "ADD_TRANSACTION",
	payload: data,
});

const option = {
	headers: {
		"Content-Type": "application/json",
	},
};

export const asyncAddTransaction = (newTransaction) => async (dispatch) => {
	try {
		axios
			.post(
				"https://powerful-waters-91620.herokuapp.com/post",
				newTransaction,
				option
			)
			.then((data) => console.log(data));
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
