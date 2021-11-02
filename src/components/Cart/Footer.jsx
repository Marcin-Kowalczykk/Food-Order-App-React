import React, { useContext, useState } from 'react';

import styled from 'styled-components';
import BoxButtonBrown from '../Ui/BoxButtonBrown';
import BoxButtonWhite from '../Ui/BoxButtonWhite';
import OrderForm from './OrderForm';

import CartContext from '../../store/CartContext';

const AmountSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 2em;
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 600px) {
    margin: 1em;
  }
`;

const ButtonsArea = styled.section`
  display: flex;
  justify-content: flex-end;
  margin: 1em;
`;

const CloseButton = styled(BoxButtonWhite)`
  margin-right: 5px;
  width: 5rem;
  border-radius: 20px;
`;

const Footer = ({ onHideModalHandler }) => {
  const cartCtx = useContext(CartContext);

  const [isClicked, setIsClicked] = useState(false);

  const totalPrice = `${cartCtx.totalAmount.toFixed(2)}$`;

  const buttons = (
    <ButtonsArea>
      <CloseButton onClick={onHideModalHandler}>Close</CloseButton>
      <BoxButtonBrown
        onClick={() => {
          setIsClicked(true);
        }}
      >
        Order
      </BoxButtonBrown>
    </ButtonsArea>
  );

  return (
    <footer>
      <AmountSection>
        <span>Total:</span>
        <span>{totalPrice}</span>
      </AmountSection>
      {isClicked && <OrderForm />}
      {!isClicked && buttons}
    </footer>
  );
};

export default Footer;
