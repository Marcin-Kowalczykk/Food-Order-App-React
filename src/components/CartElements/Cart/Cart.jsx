import React, { useContext } from 'react';

import { ContentWrapper, Ul } from '.';

import CartFooter from '../CartFooter';
import CartElement from '../CartElement';
import CartContext from '../../../store/CartContext';

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
      <CartFooter onHideModalHandler={onHideModalHandler} />
    </ContentWrapper>
  );
};

export default Cart;
