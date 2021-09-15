import React from 'react';

import BoxWrapper from '../../Ui/BoxWrapper';

import ListElemMeal from './ListElement/ListElemMeal';

const ListOfMeals = ({ MealsList, onAddMealData }) => {
  const saveMealData = (mealDataFromElem) => {
    const mealData = {
      ...mealDataFromElem,
    };
    onAddMealData(mealData);
  };

  return (
    <BoxWrapper>
      <ul>
        {MealsList.map((element) => {
          return (
            <ListElemMeal
              key={element.id}
              id={element.id}
              title={element.title}
              desc={element.desc}
              price={element.price}
              onAddMealData={saveMealData}
            />
          );
        })}
      </ul>
    </BoxWrapper>
  );
};

export default ListOfMeals;
