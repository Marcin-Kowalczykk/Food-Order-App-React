import React, { Fragment } from 'react';

import GlobalStyle from './components/Ui/GlobalStyle';

import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import ListOfMeals from './components/Menu/MealsList/ListOfMeals';
import styled from 'styled-components';

const UlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Cart />
      <UlWrapper>
        <ListOfMeals />
      </UlWrapper>
    </Fragment>
  );
}

export default App;
