import React, { useState } from 'react';

import GlobalStyle from './components/Ui/GlobalStyle';
import styled from 'styled-components';

import Header from './components/Layout/Header';
import ListOfMeals from './components/Menu/MealsList/ListOfMeals';
import ModalCart from './components/Ui/Modal/ModalCart';
import { MealsData } from './components/Menu/MealsData';

import CartContext from './store/CartContext';

const UlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [modalState, setModalState] = useState(false);

  const [cartState, setCartState] = useState([]);
  const [totalPriceArray, setTotalPriceArray] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addMealToCartHandler = (mealData) => {
    setTotalPriceArray((previous) => {
      const total = mealData.price * mealData.amount;
      return [total, ...previous];
    });

    setCartState((previous) => {
      return [mealData, ...previous];
    });

    setTotalPrice(
      totalPriceArray.reduce(function (acc, val) {
        return acc + val;
      }, 0)
    );

    console.log(mealData);
    console.log(cartState);
    console.log(totalPriceArray);
    console.log(totalPrice);
  };

  const removeMealFromCartHandler = () => {};

  return (
    <CartContext.Provider
      value={{
        items: cartState,
        totalPrice: totalPrice,
        addItem: addMealToCartHandler,
        removeItem: removeMealFromCartHandler,
      }}
    >
      <GlobalStyle />
      {modalState && (
        <ModalCart
          onHideModalHandler={() => {
            setModalState(false);
          }}
          totalPrice={totalPrice}
          dataToCart={cartState}
        />
      )}
      <Header
        onShowModalHandler={() => {
          setModalState(true);
        }}
      />
      <UlWrapper>
        <ListOfMeals onAddMealData={addMealToCartHandler} MealsList={MealsData} />
      </UlWrapper>
    </CartContext.Provider>
  );
}

export default App;
