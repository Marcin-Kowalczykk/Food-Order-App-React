import React from 'react';

import styled, { keyframes } from 'styled-components';
import BoxWrapper from '../Ui/BoxWrapper';

import Footer from './Footer';
import CartElement from './CartElement';

const AnimationShow = keyframes`
    from {top: -300px;}
    to {top: 10%;}
`;

const ContentWrapper = styled(BoxWrapper)`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 50%);
  overflow: hidden;
  width: 80%;
  max-width: 35rem;
  z-index: 25;
  animation: ${AnimationShow} 1s;
`;

const Cart = ({ onHideModalHandler }) => {
  return (
    <ContentWrapper>
      <ul>
        <CartElement />
        <Footer onHideModalHandler={onHideModalHandler} />
      </ul>
    </ContentWrapper>
  );
};

export default Cart;
