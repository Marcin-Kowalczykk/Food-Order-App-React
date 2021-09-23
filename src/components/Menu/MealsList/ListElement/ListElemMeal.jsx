import React, { useContext } from 'react';

import styled from 'styled-components';
import BoxBoldText from '../../../Ui/BoxBoldText';
import BoxElemWrapper from '../../../Ui/BoxElemWrapper';

import MealForm from './MealForm';

import CartContext from '../../../../store/CartContext';

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

const Description = styled.div`
  font-size: 0.7rem;
  margin-bottom: 10px;
  font-style: italic;
`;

const ListElemMeal = ({ title, desc, price, id }) => {
  const cartCtx = useContext(CartContext);
  const DisplayPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amountfromForm) => {
    cartCtx.addItem({
      key: id,
      id: id,
      title: title,
      price: price,
      amount: amountfromForm,
    });
  };

  return (
    <Li>
      <BoxElemWrapper>
        <BoxBoldText>{title}</BoxBoldText>
        <Description>{desc}</Description>
        <BoxBoldText>{DisplayPrice}</BoxBoldText>
      </BoxElemWrapper>
      <MealForm id={id} onAddItem={addToCartHandler} />
    </Li>
  );
};

export default ListElemMeal;
