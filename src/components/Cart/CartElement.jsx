import React from 'react';

import BoxBoldText from '../Ui/BoxBoldText';
import BoxButtonWhite from '../Ui/BoxButtonWhite';
import BoxColumnWrapper from '../Ui/BoxColumnWrapper';
import { Price, Section, AmountSection, Li } from '../../styled/CartElement-styled';

const CartElement = ({ title, price, amount, onAdd, onRemove }) => {
  return (
    <Li>
      <BoxColumnWrapper>
        <BoxBoldText>{title}</BoxBoldText>
        <Price>{`${price}$`}</Price>
      </BoxColumnWrapper>
      <Section>
        <BoxBoldText>Quantity:</BoxBoldText>
        <AmountSection>{amount}</AmountSection>
      </Section>
      <Section>
        <BoxButtonWhite onClick={onRemove}>-</BoxButtonWhite>
        <BoxButtonWhite onClick={onAdd}>+</BoxButtonWhite>
      </Section>
    </Li>
  );
};

export default CartElement;
