import axios from "axios";

axios.defaults.baseURL = "https://powerful-waters-91620.herokuapp.com";

export const setAuthToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  axios.defaults.headers.common["Authorization"] = null;
};

export const loginToWallet = (credentials) =>
  axios.post("/auth/login", credentials);

export const registerToWallet = (credentials) =>
  axios.post("/auth/register", credentials);

export const logoutFromWallet = (credentials) =>
  axios.post("/auth/logout", credentials);

export const getTransactions = () => axios.get("/get");

export const addTransaction = (transaction) => axios.post("/post", transaction);

export const deleteTransaction = (transactionId) =>
  axios.delete("/delete", { data: { transactionId } });
