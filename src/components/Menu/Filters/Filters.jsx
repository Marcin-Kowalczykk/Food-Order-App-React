import React from 'react';

import { Wrapper, EachItem } from '.';

const Filters = ({ filterMeals, showAllMeals }) => {
  return (
    <Wrapper>
      <EachItem onClick={showAllMeals}>All</EachItem>
      <EachItem
        onClick={() => {
          filterMeals('f');
        }}
      >
        Fish
      </EachItem>
      <EachItem
        onClick={() => {
          filterMeals('b');
        }}
      >
        Beef
      </EachItem>
      <EachItem
        onClick={() => {
          filterMeals('c');
        }}
      >
        Chicken
      </EachItem>
      <EachItem
        onClick={() => {
          filterMeals('d');
        }}
      >
        Drinks
      </EachItem>
    </Wrapper>
  );
};

export default Filters;
