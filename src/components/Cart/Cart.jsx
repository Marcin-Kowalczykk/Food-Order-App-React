import React from 'react';

import styled from 'styled-components';
import BoxWrapper from '../Ui/BoxWrapper';

import Footer from './Footer';
import CartElement from './CartElement';

const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300%;
  background: rgba(0, 0, 0, 0.5);
`;

const CartWrapper = styled(BoxWrapper)`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 50%);
  overflow: hidden;
  width: 80%;
  max-width: 35rem;
`;

const Cart = () => {
  return (
    <div>
      <Shadow />
      <CartWrapper>
        <ul>
          <CartElement />
          <Footer />
        </ul>
      </CartWrapper>
    </div>
  );
};

export default Cart;
