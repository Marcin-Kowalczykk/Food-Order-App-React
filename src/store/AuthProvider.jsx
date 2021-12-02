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
  const existCommunicate = localStorage.getItem('com');

  const remainingTime = remainingTimeHandler(existExspiresTime);

  if (existExspiresTime <= 10000) {
    localStorage.removeItem('userToken');
    localStorage.removeItem('expiresTime');
    localStorage.removeItem('com');
    return null;
  }

  return {
    existToken: existToken,
    remainingUserTime: remainingTime,
    existCommunicate: existCommunicate,
  };
};

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const existToken = getExistToken();
  let initialToken;
  let initialCommunicate;

  if (existToken) {
    initialToken = existToken.existToken;
    initialCommunicate = existToken.existCommunicate;
  } else {
    initialToken = null;
    initialCommunicate = null;
  }

  const [token, setToken] = useState(initialToken);
  const [communicate, setCommunicate] = useState(initialCommunicate);
  const [localId, setLocalId] = useState('');

  const userTokenExist = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('localId');
    localStorage.removeItem('userToken');
    localStorage.removeItem('expiresTime');
    localStorage.removeItem('com');

    if (timeToLogout) {
      clearTimeout(timeToLogout);
    }

    navigate(SIGN_IN_LINK);
  });

  const loginHandler = (dataFromRequest, expiresTimeFromForm, localId) => {
    setLocalId(localId);
    setToken(dataFromRequest);
    localStorage.setItem('localId', localId);
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

  const dataFromFormHandler = (dataFromAuthForm) => {
    const com = dataFromAuthForm;

    setCommunicate(com);

    localStorage.setItem('com', communicate);
  };

  const authContext = {
    token: token,
    isUserSignedIn: userTokenExist,
    loginHandler: loginHandler,
    logoutHandler: logoutHandler,
    dataFromFormHandler: dataFromFormHandler,
    communicate: communicate,
    localId: localId,
  };

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
