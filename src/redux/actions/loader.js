<<<<<<< HEAD
export const loaderOn = () => ({
  type: "LOADER_ON",
=======
import { LOADER_ON, LOADER_OFF } from "../../constants";

export const loaderOn = () => ({
  type: LOADER_ON,
>>>>>>> update-transaction
  payload: true,
});

export const loaderOff = () => ({
<<<<<<< HEAD
  type: "LOADER_OFF",
=======
  type: LOADER_OFF,
>>>>>>> update-transaction
  payload: false,
});
