import React from 'react';

import styled from 'styled-components';

import BoxBoldText from '../Ui/BoxBoldText';
import BoxElemWrapper from '../Ui/BoxElemWrapper';
import BoxButtonWhite from '../Ui/BoxButtonWhite';

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 2px solid tomato;
  margin: 1rem 2rem 1rem 0;

  @media (max-width: 600px) {
    font-size: 0.7rem;
    margin: 0.3rem 1.2rem 0.3rem -1rem;
  }
`;

const Section = styled(BoxElemWrapper)`
  flex-direction: row;
  align-items: center;
`;

const QuantityArea = styled.div`
  border: 1px solid brown;
  border-radius: 5px;
  padding: 2.5px 5px;
  font-size: 0.7rem;
  font-weight: bold;
  color: #c72d12;
`;

const CartElement = () => {
  return (
    <Li>
      <BoxElemWrapper>
        <BoxBoldText>Sushi</BoxBoldText>
        <BoxBoldText>$22.99</BoxBoldText>
      </BoxElemWrapper>
      <Section>
        <BoxBoldText>Quantity:</BoxBoldText>
        <QuantityArea>1</QuantityArea>
      </Section>
      <Section>
        <BoxButtonWhite>-</BoxButtonWhite>
        <BoxButtonWhite>+</BoxButtonWhite>
      </Section>
    </Li>
  );
};

export default CartElement;
