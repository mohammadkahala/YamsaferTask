import types from './types';
import status from '../../constants';

const EMAIL = "kahala";
const PASSWORD = "admin";

export const verifyUser = (email, password) => {
  if ( email === EMAIL && password === PASSWORD ) {
    document.cookie = "loggedIn=true";
    return {
      type: types.LOG_IN_STATUS,
      payload: status.LOGGED_IN
    };
  } else {
    document.cookie = "loggedIn=false";
    return {
      type: types.LOG_IN_STATUS,
      payload: status.INVALID_USER
    }
  }
};

export const logInFromLocalStorage = () => {
  let isLoggedIn = 'false';
  if (document.cookie)
    isLoggedIn = document.cookie.split('=')[1];

  if (isLoggedIn && isLoggedIn === 'true'){
    return {
      type: types.LOG_IN_STATUS,
      payload: status.LOGGED_IN
    };
  }else {
    return {
      type: types.LOG_IN_STATUS,
      payload: status.LOGGED_OUT
    };
  }
};


