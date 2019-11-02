import { combineReducers } from "redux";

import types from "./types";
import status from '../../constants';

const logInInfo = (loggedIn = status.PENDING, action) => {
  switch (action.type) {
    case types.LOG_IN_STATUS: return action.payload;
    default: return loggedIn;
  }
};

export default combineReducers({
  loggedIn: logInInfo
})