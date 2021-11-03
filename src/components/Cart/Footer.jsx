import React, { Fragment, useContext, useState } from 'react';

import styled from 'styled-components';
import BoxButtonBrown from '../Ui/BoxButtonBrown';
import BoxButtonWhite from '../Ui/BoxButtonWhite';

import OrderForm from './OrderForm';

import { USER_ORDER } from '../../api/ApiLinks';

import CartContext from '../../store/CartContext';

const AmountSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 2em;
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 600px) {
    margin: 1em;
  }
`;

const ButtonsArea = styled.section`
  display: flex;
  justify-content: flex-end;
  margin: 1em;
`;

const CloseButton = styled(BoxButtonWhite)`
  margin-right: 5px;
  width: 5rem;
  border-radius: 20px;
`;

const ErrorMsg = styled.p`
  color: red;
  text-align: center;
  font-size: 12px;
`;

const FeedBack = styled.p`
  color: tomato;
  text-align: center;
`;

const Footer = ({ onHideModalHandler }) => {
  const cartCtx = useContext(CartContext);

  const [isClicked, setIsClicked] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addNewOrderHandler = async (userDataFromForm) => {
    setErrorMsg(null);
    setIsSent(false);

    if (cartCtx.totalAmount > 0) {
      setIsLoading(true);

      try {
        const response = await fetch(USER_ORDER, {
          method: 'POST',
          body: JSON.stringify({
            id: userDataFromForm.userName + ' ' + Math.random(),
            usersData: userDataFromForm,
            orderData: cartCtx.items,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('something went wrong, try again');
        } else {
          setIsSent(true);
        }
      } catch (error) {
        setErrorMsg(error.message);
      }
      setIsLoading(false);
      cartCtx.clearCart();
    } else {
      setIsSent(false);
      setErrorMsg('Add something to your Cart !');
    }
  };

  const totalPrice = `${cartCtx.totalAmount.toFixed(2)}$`;

  const buttons = (
    <ButtonsArea>
      <CloseButton onClick={onHideModalHandler}>Close</CloseButton>
      <BoxButtonBrown
        onClick={() => {
          setIsClicked(true);
        }}
      >
        Order
      </BoxButtonBrown>
    </ButtonsArea>
  );

  const contentAfterSent = (
    <Fragment>
      <FeedBack>Thank you for order !</FeedBack>
      <ButtonsArea>
        <CloseButton onClick={onHideModalHandler}>Close</CloseButton>
      </ButtonsArea>
    </Fragment>
  );
  const cartContent = (
    <Fragment>
      <AmountSection>
        <span>Total:</span>
        <span>{totalPrice}</span>
      </AmountSection>
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
      {isLoading && <FeedBack>Sending Your Order ...</FeedBack>}
      {isClicked && !isSent && <OrderForm onAddNewOrder={addNewOrderHandler} />}
      {!isClicked && buttons}
    </Fragment>
  );

  return <footer>{isSent ? contentAfterSent : cartContent}</footer>;
};

export default Footer;
