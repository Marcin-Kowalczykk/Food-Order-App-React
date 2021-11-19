import React, { useState } from 'react';

import GlobalStyle from './styles/GlobalStyle';

import Header from './components/Header/Header';
import ListOfMeals from './components/Menu/MealsList/ListOfMeals/ListOfMeals';
import ModalCart from './components/Ui/Modal/ModalCart';
import { themeDark, themeLight } from './styles/theme';

import CartProvider from './store/CartProvider';
import { ThemeProvider } from 'styled-components';

function App() {
  const [modalState, setModalState] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(false);

  const toggleThemeHandler = () => {
    setToggleTheme((prev) => !prev);
  };

  return (
    <CartProvider>
      <ThemeProvider theme={toggleTheme ? themeLight : themeDark}>
        <GlobalStyle />
        {modalState && (
          <ModalCart
            onHideModalHandler={() => {
              setModalState(false);
            }}
          />
        )}
        <Header
          onShowModal={() => {
            setModalState(true);
          }}
          onToggleTheme={toggleThemeHandler}
        />
        <ListOfMeals />
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
