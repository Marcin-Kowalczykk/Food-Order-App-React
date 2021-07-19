import React from 'react';

import styled from 'styled-components';

import ListElemMeal from './ListElement/ListElemMeal';
import { MealsData } from '../MealsData';

const UlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Ul = styled.ul`
  width: 80%;
  margin-top: 7rem;
  background: white;
  border-radius: 10px;
`;

const ListOfMeals = () => {
  return (
    <UlWrapper>
      <Ul>
        {MealsData.map((element) => {
          return (
            <ListElemMeal
              key={element.id}
              title={element.title}
              id={element.id}
              desc={element.desc}
              price={element.price}
            />
          );
        })}
      </Ul>
    </UlWrapper>
  );
};

export default ListOfMeals;
