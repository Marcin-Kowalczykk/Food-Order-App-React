import React from 'react';

import BoxWrapper from '../../Ui/BoxWrapper';

import ListElemMeal from './ListElement/ListElemMeal';
import { MealsData } from '../MealsData';

const ListOfMeals = () => {
  return (
    <BoxWrapper>
      <ul>
        {MealsData.map((element) => {
          return (
            <ListElemMeal
              key={element.id}
              id={element.id}
              title={element.title}
              desc={element.desc}
              price={element.price}
            />
          );
        })}
      </ul>
    </BoxWrapper>
  );
};

export default ListOfMeals;
