import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from './AuthContext';

import { SIGN_IN_LINK } from '.././Links/Links';

let timeToLogout;

const remainingTimeHandler = (expiresTimeFromForm) => {
  const actualTime = new Date().getTime();
  const expiresTime = new Date(expiresTimeFromForm).getTime();
  const remainingTime = expiresTime - actualTime;

  return remainingTime; // in ms
};

const getExistToken = () => {
  const existToken = localStorage.getItem('userToken');
  const existExspiresTime = localStorage.getItem('expiresTime');

  const remainingTime = remainingTimeHandler(existExspiresTime);

  if (existExspiresTime <= 10000) {
    localStorage.removeItem('userToken');
    localStorage.removeItem('expiresTime');
    return null;
  }

  return {
    existToken: existToken,
    remainingUserTime: remainingTime,
  };
};

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const existToken = getExistToken();
  let initialToken;

  if (existToken) {
    initialToken = existToken.existToken;
  } else {
    initialToken = null;
  }

  const [token, setToken] = useState(initialToken);

  const userTokenExist = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('userToken');
    localStorage.removeItem('expiresTime');

    if (timeToLogout) {
      clearTimeout(timeToLogout);
    }

    navigate(SIGN_IN_LINK);
  });

  const loginHandler = (dataFromRequest, expiresTimeFromForm) => {
    setToken(dataFromRequest);
    localStorage.setItem('userToken', dataFromRequest);
    localStorage.setItem('expiresTime', expiresTimeFromForm);

    const remainingUserTime = remainingTimeHandler(expiresTimeFromForm);

    timeToLogout = setTimeout(logoutHandler, remainingUserTime);
  };

  useEffect(() => {
    if (existToken) {
      console.log(existToken.remainingUserTime);
      timeToLogout = setTimeout(logoutHandler, existToken.remainingUserTime);
    }
  }, [existToken, logoutHandler]);

  const authContext = {
    token: token,
    isUserSignedIn: userTokenExist,
    loginHandler: loginHandler,
    logoutHandler: logoutHandler,
  };

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
