import React, { useState } from 'react';

import GlobalStyle from './styles/GlobalStyle';

import Header from './components/Header/Header';
import ListOfMeals from './components/Menu/MealsList/ListOfMeals/ListOfMeals';
import ModalCart from './components/Ui/Modal/ModalCart';

import CartProvider from './store/CartProvider';

function App() {
  const [modalState, setModalState] = useState(false);

  return (
    <CartProvider>
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
      <ListOfMeals />
    </CartProvider>
  );
}

export default App;
