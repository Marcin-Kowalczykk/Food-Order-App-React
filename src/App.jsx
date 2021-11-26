import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
//pages
import SignInPage from './pages/Auth/SignInPage';
import SignUpPage from './pages/Auth/SignUpPage';
import MainPage from './pages/MainPage';
//components
import Header from './components/Header/Header';
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
        <Routes>
          <Route
            path="/Food-Order-App-React/auth-sign-in"
            element={<SignInPage />}
          />
          <Route
            path="/Food-Order-App-React/auth-sign-up"
            element={<SignUpPage />}
          />
          <Route path="/Food-Order-App-React/main" exact element={<MainPage />} />
        </Routes>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
