import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';

import AuthContext from '../store/AuthContext';

const useSigns = (url, inputMail, inputPass, navigateTo) => {
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [feedBack, setFeedBack] = useState('');

  const signUserRequest = async () => {
    setIsLoading(true);
    setErrorMsg(null);
    setFeedBack(null);

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: inputMail,
          password: inputPass,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      const token = data.idToken;
      const localId = data.localId;
      const expiresTime = new Date(new Date().getTime() + +data.expiresIn * 1000);
      const dataError = data.error;

      setIsLoading(false);

      if (!response.ok) {
        let errorMsg;
        if (data && dataError && dataError.message) {
          errorMsg = dataError.message;
        } else {
          errorMsg = 'Something went wrong!';
        }
        throw new Error(errorMsg);
      } else {
        const authDataToContext = authCtx.loginHandler(
          token,
          expiresTime.toISOString(),
          localId
        );
        const emailToContext = authCtx.dataFromFormHandler(inputMail);
        setFeedBack('Success');
        navigate(navigateTo);
        return { authData: authDataToContext, email: emailToContext };
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return {
    isLoading: isLoading,
    errorMsg: errorMsg,
    feedBack: feedBack,
    signUserRequest,
  };
};

export default useSigns;
