import React from 'react';

import BoxBoldText from '../../Ui/BoxBoldText';
import BoxButton from '../../Ui/BoxButton';
import BoxColumnWrapper from '../../Layout/BoxColumnWrapper';
import { Price, Section, AmountSection, Li } from '.';

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
        <BoxButton variant={'white'} onClick={onRemove}>
          -
        </BoxButton>
        <BoxButton variant={'white'} onClick={onAdd}>
          +
        </BoxButton>
      </Section>
    </Li>
  );
};

export default CartElement;
