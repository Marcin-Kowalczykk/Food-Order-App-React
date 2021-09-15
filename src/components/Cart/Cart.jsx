import React from 'react';

import styled, { keyframes } from 'styled-components';
import BoxWrapper from '../Ui/BoxWrapper';

import Footer from './Footer';
import CartElement from './CartElement';

const AnimationShow = keyframes`
    from {top: -300px;}
    to {top: 15%;}
`;

const ContentWrapper = styled(BoxWrapper)`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, 50%);
  overflow: hidden;
  width: 80%;
  max-width: 35rem;
  z-index: 25;
  animation: ${AnimationShow} 1s;
`;

const Cart = ({ onHideModalHandler, dataToCart, totalPrice }) => {
  return (
    <ContentWrapper>
      <ul>
        {dataToCart.map((element) => {
          return (
            <CartElement
              key={element.id}
              title={element.title}
              price={element.price}
              amount={element.amount}
            />
          );
        })}
        <Footer
          onHideModalHandler={onHideModalHandler}
          price={dataToCart.price}
          totalPrice={totalPrice}
        />
      </ul>
    </ContentWrapper>
  );
};

export default Cart;
