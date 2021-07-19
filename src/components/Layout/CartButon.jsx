import React, { Fragment } from 'react';

import styled from 'styled-components';
import BoxButton from '../Ui/BoxButton';

const ButtonWrapper = styled(BoxButton)`
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

const CartButton = () => {
  return (
    <Fragment>
      <ButtonWrapper>
        <div>
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div>Cart</div>
        <Quantity>0</Quantity>
      </ButtonWrapper>
    </Fragment>
  );
};

export default CartButton;
