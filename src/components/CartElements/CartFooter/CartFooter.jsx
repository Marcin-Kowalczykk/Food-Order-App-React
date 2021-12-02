import React, { Fragment, useContext, useState } from 'react';

// import BoxButtonBrown from '../../Ui/BoxButtonBrown';
import BoxButton from '../../Ui/BoxButton';
import {
  AmountSection,
  ButtonsArea,
  CloseButton,
  FeedBack,
  ErrorMsg,
  LoadingArea,
} from '.';
import LoadingSpinner from '../../Ui/LoadingSpinner';

import OrderForm from '../OrderForm';

import { USER_ORDER } from '../../../api/ApiLinks';

import CartContext from '../../../store/CartContext';
import AuthContext from '../../../store/AuthContext';

const Footer = ({ onHideModalHandler }) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const [isClicked, setIsClicked] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [foundName, setFoundName] = useState();
  const [foundAdress, setFoundAdress] = useState();
  const [foundZipCode, setFoundZipCode] = useState();
  const [foundPhoneNumber, setFoundPhoneNumber] = useState();

  const checkDataForms = async () => {
    if (authCtx.isUserSignedIn) {
      const response = await fetch(USER_ORDER);

      const data = await response.json();
      const actualLocalId = localStorage.getItem('localId');

      const arrayFromFireBase = [];

      for (const key in data) {
        arrayFromFireBase.push({
          localIdFromDb: data[key].id,
          name: data[key].usersData,
        });
      }

      const compareIds = (element) => element.localIdFromDb === actualLocalId;
      const foundElement = arrayFromFireBase.find(compareIds);

      if (foundElement) {
        const foundUserInfomation = {
          name: foundElement.name.userName,
          adress: foundElement.name.adress,
          zipCode: foundElement.name.zipCode,
          phoneNumber: foundElement.name.phoneNumber,
        };

        setFoundName(foundUserInfomation.name);
        setFoundAdress(foundUserInfomation.adress);
        setFoundZipCode(foundUserInfomation.zipCode);
        setFoundPhoneNumber(foundUserInfomation.phoneNumber);

        authCtx.dataFromFormHandler(foundUserInfomation.name);
        localStorage.setItem('com', foundUserInfomation.name);
      }
    }
  };

  const addNewOrderHandler = async (userDataFromForm) => {
    setErrorMsg(null);
    setIsSent(false);

    let userData;

    if (
      authCtx.isUserSignedIn &&
      foundName &&
      foundAdress &&
      foundZipCode &&
      foundPhoneNumber
    ) {
      userData = {
        userName: foundName,
        adress: foundAdress,
        zipCode: foundZipCode,
        phoneNumber: foundPhoneNumber,
      };
    } else {
      userData = userDataFromForm;
    }

    if (cartCtx.totalAmount > 0) {
      setIsLoading(true);

      try {
        const response = await fetch(USER_ORDER, {
          method: 'POST',
          body: JSON.stringify({
            id: authCtx.localId,
            usersData: userData,
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

  const clearAllInputs = () => {
    setFoundName('');
    setFoundAdress('');
    setFoundZipCode('');
    setFoundPhoneNumber('');
  };

  const totalPrice = `${cartCtx.totalAmount.toFixed(2)}$`;

  const buttons = (
    <ButtonsArea>
      <CloseButton variant={'white'} onClick={onHideModalHandler}>
        Close
      </CloseButton>
      <BoxButton
        variant={'brown'}
        onClick={() => {
          setIsClicked(true);
          checkDataForms();
        }}
      >
        Order
      </BoxButton>
    </ButtonsArea>
  );

  const contentAfterSent = (
    <Fragment>
      <FeedBack>Thank you for order !</FeedBack>
      <ButtonsArea>
        <CloseButton variant={'brown'} onClick={onHideModalHandler}>
          Close
        </CloseButton>
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
      {isLoading && (
        <LoadingArea>
          <LoadingSpinner />
        </LoadingArea>
      )}
      {isClicked && !isSent && (
        <OrderForm
          onAddNewOrder={addNewOrderHandler}
          foundName={foundName}
          foundAdress={foundAdress}
          foundZipCode={foundZipCode}
          foundPhoneNumber={foundPhoneNumber}
          clearAllInputs={clearAllInputs}
        />
      )}
      {!isClicked && buttons}
    </Fragment>
  );

  return <footer>{isSent ? contentAfterSent : cartContent}</footer>;
};

export default Footer;
