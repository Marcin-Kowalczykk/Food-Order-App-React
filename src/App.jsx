import React, { useState } from 'react';

import GlobalStyle from './components/Ui/GlobalStyle';

import Header from './components/Layout/Header';
import ListOfMeals from './components/Menu/MealsList/ListOfMeals';
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
