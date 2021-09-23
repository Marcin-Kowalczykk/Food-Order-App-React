import React, { useContext } from 'react';

import styled, { keyframes } from 'styled-components';
import BoxWrapper from '../Ui/BoxWrapper';

import Footer from './Footer';
import CartElement from './CartElement';
import CartContext from '../../store/CartContext';

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
  max-height: 25rem;
  overflow: scroll;
  z-index: 25;
  animation: ${AnimationShow} 1s;
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
      <ul>
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
        <Footer onHideModalHandler={onHideModalHandler} />
      </ul>
    </ContentWrapper>
  );
};

export default Cart;
