import React, { Fragment } from 'react';

import styled from 'styled-components';
import BoxButtonBrown from '../Ui/BoxButtonBrown';

const CartBtn = styled(BoxButtonBrown)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 9rem;
  margin: 1rem;
`;

const Quantity = styled.div`
  border-radius: 10px;
  background-color: tomato;
  width: 1.5rem;
  padding: 0.1rem;
`;

const CartButton = ({ onShowModalHandler }) => {
  return (
    <Fragment>
      <CartBtn onClick={onShowModalHandler}>
        <div>
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div>Cart</div>
        <Quantity>5</Quantity>
      </CartBtn>
    </Fragment>
  );
};

export default CartButton;
