import React, { Fragment, useContext } from 'react';

import { CartBtn, Quantity } from '.';

import CartContext from '../../../store/CartContext';

const CartButton = ({ onShowModal }) => {
  const cartCtx = useContext(CartContext);

  const quantityOfCartItems = cartCtx.items.reduce((a, b) => {
    return a + b.amount;
  }, 0);

  return (
    <Fragment>
      <CartBtn variant={'brown'} onClick={onShowModal}>
        <div>
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div>Cart</div>
        <Quantity>{quantityOfCartItems}</Quantity>
      </CartBtn>
    </Fragment>
  );
};

export default CartButton;
