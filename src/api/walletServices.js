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
export const loginToWalletWithGoogle = (credentials) =>
  axios.post("/auth/google", credentials);

export const loginToWalletWithFacebook = (credentials) =>
  axios.post("/auth/facebook", credentials);

export const registerToWallet = (credentials) =>
  axios.post("/auth/register", credentials);

export const logoutFromWallet = () => axios.post("/auth/logout");

export const getTransactions = () => axios.get("/get");

export const addTransaction = async (transaction) =>
  await axios.post("/post", transaction);

export const deleteTransaction = (transactionId) =>
  axios.delete("/delete", { data: { transactionId } });

export const updateTransaction = (transactionId, transaction) =>
  axios.patch("/update", { transactionId, ...transaction });

export const getCurrentUser = () => axios.get("/user");
export const getStatisticsItem = (year, month) =>
  axios.get(`/get/stat?type=all&year=${year}&month=${month}`);
