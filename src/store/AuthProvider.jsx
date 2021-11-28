import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from './AuthContext';

import { SIGN_IN_LINK } from '.././Links/Links';

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);

  const userTokenExist = !!token;

  const loginHandler = (dataFromRequest) => {
    setToken(dataFromRequest);
  };

  const logoutHandler = () => {
    setToken(null);
    navigate(SIGN_IN_LINK);
  };

  const authContext = {
    token: token,
    isUserSignedIn: userTokenExist,
    loginHandler: loginHandler,
    logoutHandler: logoutHandler,
  };

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
