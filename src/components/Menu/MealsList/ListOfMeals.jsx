import React, { useEffect, useState, useCallback } from 'react';

import styled from 'styled-components';

import BoxWrapper from '../../Ui/BoxWrapper';
import ListElemMeal from './ListElement/ListElemMeal';
import { MEALS_FROM_FIREBASE } from '../../../api/ApiLinks';

const P = styled.p`
  text-align: center;
  color: red;
`;

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
    console.log('runnig');
  }, []);

  useEffect(() => {
    fetchMealsFromFireBase();
  }, [fetchMealsFromFireBase]);

  return (
    <BoxWrapper>
      {errorMsg && <P>{errorMsg}</P>}
      {isLoading && <P>Loading ... </P>}
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
    </BoxWrapper>
  );
};

export default ListOfMeals;
