import React, { useEffect, useState, useCallback, Fragment } from 'react';

import ListElemMeal from '../ListElement/ListElemMeal/ListElemMeal';
import { MEALS_FROM_FIREBASE } from '../../../../api/ApiLinks';

import LoadingSpinner from '../../../Ui/LoadingSpinner';

import { UlWrapper, FeedBack, LoadingArea } from '.';

const ListOfMeals = () => {
  const [mealsArray, setMealsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchMealsFromFireBase = useCallback(async () => {
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch(MEALS_FROM_FIREBASE);

      if (!response.ok) {
        throw new Error('something went wrong (try again)');
      }

      const data = await response.json();

      const arrayMealsFromFireBase = [];

      for (const key in data) {
        arrayMealsFromFireBase.push({
          id: key,
          title: data[key].title,
          desc: data[key].description,
          price: data[key].price,
        });
      }
      setMealsArray(arrayMealsFromFireBase);
    } catch (err) {
      setErrorMsg(err.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMealsFromFireBase();
  }, [fetchMealsFromFireBase]);

  return (
    <Fragment>
      {isLoading && (
        <LoadingArea>
          <LoadingSpinner />
        </LoadingArea>
      )}
      <UlWrapper>
        {errorMsg && <FeedBack>{errorMsg}</FeedBack>}
        <ul>
          {mealsArray.map((element) => {
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
      </UlWrapper>
    </Fragment>
  );
};

export default ListOfMeals;
