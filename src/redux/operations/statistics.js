import { getStatisticsItem, setAuthToken } from "../../api/walletServices";
import { statisticGetData } from "../actions/statistic";
import { filteredToken } from "../../helpers/convertator";
import { getFromLocaleStorage } from "../../helpers/storage";
import { loaderOn, loaderOff } from "../actions/loader";

const token = filteredToken(
  getFromLocaleStorage("persist:auth-token")
    ? getFromLocaleStorage("persist:auth-token").token
    : ""
);

export const statisticUserGet = (params) => async (dispatch) => {
  dispatch(loaderOn());
  try {
    setAuthToken(token);
    const { year, month } = params;
    const result = await getStatisticsItem(year, month);
    const statItems = result.data;
    dispatch(statisticGetData(statItems));
  } catch (error) {
    console.warn("ERROR", error);
  } finally {
    dispatch(loaderOff());
  }
};
