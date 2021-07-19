import React, { Fragment } from 'react';

import GlobalStyle from './components/Ui/GlobalStyle';

import Header from './components/Layout/Header';
import ListOfMeals from './components/Menu/MealsList/ListOfMeals';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <ListOfMeals />
    </Fragment>
  );
}

export default App;
