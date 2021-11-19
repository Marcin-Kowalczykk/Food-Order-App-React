import React, { useContext } from 'react';

import BoxBoldText from '../../../../Ui/BoxBoldText';
import BoxColumnWrapper from '../../../../Layout/BoxColumnWrapper';
import { Description, Li } from '.';

import MealForm from '../MealForm';

import CartContext from '../../../../../store/CartContext';

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
      <BoxColumnWrapper>
        <BoxBoldText>{title}</BoxBoldText>
        <Description>{desc}</Description>
        <BoxBoldText>{DisplayPrice}</BoxBoldText>
      </BoxColumnWrapper>
      <MealForm id={id} onAddItem={addToCartHandler} />
    </Li>
  );
};

export default ListElemMeal;
