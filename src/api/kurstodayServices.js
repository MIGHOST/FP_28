import axios from "axios";
import { CORS_PROXY } from "../constants";

export const getExchangeRate = () =>
  axios.get(`${CORS_PROXY}https://kurstoday.com/api/average/banks`);
