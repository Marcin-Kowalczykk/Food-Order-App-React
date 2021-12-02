import React, { useContext } from 'react';

import AuthContext from '../../store/AuthContext';

import { DescWrapper, P, Header } from '.';

const Description = () => {
  const authCtx = useContext(AuthContext);
  const communicate = authCtx.communicate;

  return (
    <DescWrapper>
      {authCtx.isUserSignedIn && <Header>Hello {communicate}</Header>}
      <h3>Welcome to the best restaurant of the world</h3>
      <P>Choose your dreaming food and add it to your cart !</P>
      <P>Our best chefs will make delicious dishes for you !</P>
      <P>Sit back and we will take care of your order as soon as possible !</P>
    </DescWrapper>
  );
};

export default Description;
