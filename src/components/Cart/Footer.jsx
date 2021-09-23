import React, { useContext } from 'react';

import styled from 'styled-components';
import BoxButtonBrown from '../Ui/BoxButtonBrown';
import BoxButtonWhite from '../Ui/BoxButtonWhite';

import CartContext from '../../store/CartContext';

const AmountSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-right: 2rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ButtonsArea = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
`;

const CloseButton = styled(BoxButtonWhite)`
  margin-right: 5px;
  width: 5rem;
  border-radius: 20px;
`;

const Footer = ({ onHideModalHandler }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount2 = cartCtx.totalAmount.toFixed(2);

  return (
    <footer>
      <AmountSection>
        <span>Total:</span>
        <span>{totalAmount2}</span>
      </AmountSection>
      <ButtonsArea>
        <CloseButton onClick={onHideModalHandler}>Close</CloseButton>
        <BoxButtonBrown>Order</BoxButtonBrown>
      </ButtonsArea>
    </footer>
  );
};

export default Footer;
