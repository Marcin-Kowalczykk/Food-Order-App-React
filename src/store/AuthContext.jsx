import React from 'react';

const AuthContext = React.createContext({
  token: '',
  isUserSignedIn: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});

export default AuthContext;
