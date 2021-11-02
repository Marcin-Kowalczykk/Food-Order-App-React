import React, { useContext } from 'react';

import styled, { keyframes } from 'styled-components';
import BoxWrapper from '../Ui/BoxWrapper';

import Footer from './Footer';
import CartElement from './CartElement';
import CartContext from '../../store/CartContext';

const AnimationShow = keyframes`
    from {top: -300px;}
    to {top: 5vh;}
`;

const ContentWrapper = styled(BoxWrapper)`
  position: fixed;
  top: 5vh;
  left: 28%;
  overflow: hidden;
  width: 80%;
  max-width: 35em;
  z-index: 25;
  animation: ${AnimationShow} 1s;

  @media (max-width: 600px) {
    max-height: 35em;
    left: 10%;
  }
`;

const Ul = styled.ul`
  max-height: 10em;
  overflow: scroll;
`;

const Cart = ({ onHideModalHandler }) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <ContentWrapper>
      <Ul>
        {cartCtx.items.map((element) => {
          return (
            <CartElement
              id={element.id}
              key={element.id}
              title={element.title}
              price={element.price}
              amount={element.amount}
              onRemove={cartItemRemoveHandler.bind(null, element.id)}
              onAdd={cartItemAddHandler.bind(null, element)}
            />
          );
        })}
      </Ul>
      <Footer onHideModalHandler={onHideModalHandler} />
    </ContentWrapper>
  );
};

export default Cart;
