<<<<<<< HEAD
import { LOADER_ON, LOADER_OFF } from "../../constants";

=======
<<<<<<< HEAD
import { LOADER_ON, LOADER_OFF } from "../../constants";

=======
>>>>>>> remotes/origin/F4-5-6-8-9
>>>>>>> origin/try
const initialState = false;

const loader = (state = initialState, { type, payload }) => {
  switch (type) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/try
    case LOADER_ON:
      return payload;
    case LOADER_OFF:
      return payload;
<<<<<<< HEAD
=======
=======
    case "LOADER_ON":
      return payload;
    case "LOADER_OFF":
      return payload;

>>>>>>> remotes/origin/F4-5-6-8-9
>>>>>>> origin/try
    default:
      return state;
  }
};

export default loader;
