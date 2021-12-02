import React from 'react';

const AuthContext = React.createContext({
  token: '',
  isUserSignedIn: false,
  localId: '',
  loginHandler: () => {},
  logoutHandler: () => {},
  dataFromFormHandler: () => {},
});

export default AuthContext;
