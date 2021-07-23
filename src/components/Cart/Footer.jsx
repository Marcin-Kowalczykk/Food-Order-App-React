import React from 'react';

import styled from 'styled-components';
import BoxButton from '../Ui/BoxButtonBrown';
import BoxButtonWhite from '../Ui/BoxButtonWhite';

const TotalAmount = styled.section`
  display: flex;
  justify-content: space-between;
  margin-right: 2rem;
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

const Footer = () => {
  return (
    <section>
      <TotalAmount>
        <h3>Total:</h3>
        <h3>$100</h3>
      </TotalAmount>
      <ButtonsArea>
        <CloseButton>Close</CloseButton>
        <BoxButton>Order</BoxButton>
      </ButtonsArea>
    </section>
  );
};

export default Footer;
