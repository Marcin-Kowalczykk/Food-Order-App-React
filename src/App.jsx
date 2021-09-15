import React, { Fragment, useState } from 'react';

import GlobalStyle from './components/Ui/GlobalStyle';
import styled from 'styled-components';

import Header from './components/Layout/Header';
import ListOfMeals from './components/Menu/MealsList/ListOfMeals';
import ModalCart from './components/Ui/Modal/ModalCart';
import { MealsData } from './components/Menu/MealsData';

const UlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [modalState, setModalState] = useState(false);

  return (
    <Fragment>
      <GlobalStyle />
      {modalState && (
        <ModalCart
          onHideModalHandler={() => {
            setModalState(false);
          }}
        />
      )}
      <Header
        onShowModalHandler={() => {
          setModalState(true);
        }}
      />
      <UlWrapper>
        <ListOfMeals MealsList={MealsData} />
      </UlWrapper>
    </Fragment>
  );
}

export default App;
