import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';

import SignInPage from './pages/Auth/SignInPage';
import SignUpPage from './pages/Auth/SignUpPage';
import MainPage from './pages/MainPage';

import Header from './components/Header/Header';
import ModalCart from './components/Ui/Modal/ModalCart';

import { themeDark, themeLight } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import CartProvider from './store/CartProvider';
import AuthProvider from './store/AuthProvider';

import { HOME_PAGE_LINK } from './Links';
import { MAIN_PAGE_LINK } from './Links';
import { SIGN_IN_LINK } from './Links';
import { SIGN_UP_LINK } from './Links';

function App() {
  const [modalState, setModalState] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(false);

  const toggleThemeHandler = () => {
    setToggleTheme((prev) => !prev);
  };

  return (
    <AuthProvider>
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
            <Route path={HOME_PAGE_LINK} element={<MainPage />} />
            <Route path={MAIN_PAGE_LINK} element={<MainPage />} />
            <Route path={SIGN_IN_LINK} element={<SignInPage />} />
            <Route path={SIGN_UP_LINK} element={<SignUpPage />} />
          </Routes>
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
