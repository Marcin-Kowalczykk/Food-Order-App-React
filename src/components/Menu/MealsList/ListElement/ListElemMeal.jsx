import React from 'react';

import styled from 'styled-components';
import BoxBoldText from '../../../Ui/BoxBoldText';
import BoxElemWrapper from '../../../Ui/BoxElemWrapper';

import MealForm from './MealForm';

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

const ListElemMeal = ({ title, desc, price }) => {
  return (
    <Li>
      <BoxElemWrapper>
        <BoxBoldText>{title}</BoxBoldText>
        <div>{desc}</div>
        <BoxBoldText>{price}</BoxBoldText>
      </BoxElemWrapper>
      <MealForm />
    </Li>
  );
};

export default ListElemMeal;
