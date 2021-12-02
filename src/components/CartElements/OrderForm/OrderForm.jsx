import React, { useContext, useState } from 'react';

import AuthContext from '../../../store/AuthContext';

import BoxColumnWrapper from '../../Layout/BoxColumnWrapper';
import BoxButton from '../../Ui/BoxButton';
import { InputContainer, Input, ErrorMsg, ButtonContainer, SubmitButton } from '.';

// import useValidationReducer from '../../hooks/use-validation-reducer';
import useValidation from '../../../hooks/use-validation';

const isNameValid = (inputValue) =>
  inputValue.trim() !== '' && inputValue.length > 2 && !inputValue.includes(' ');

const isAdressValid = (inputValue) => {
  const adressRegExp = /^([A-Z]{3,})( [0-9]{1,})?$/i;
  return adressRegExp.test(inputValue);
};

const isZipValid = (inputValue) => {
  const zipRegExp = /^([0-9]{2})(-[0-9]{3})?$/i;
  return zipRegExp.test(inputValue);
};

const isPhoneValid = (inputValue) => {
  const phoneRegExp = /^([0-9]{3})( [0-9]{3})( [0-9]{3})?$/i;
  return phoneRegExp.test(inputValue) && inputValue.trim().length > 9;
};

const OrderForm = ({
  onAddNewOrder,
  foundName,
  foundAdress,
  foundZipCode,
  foundPhoneNumber,
  clearAllInputs,
}) => {
  const authCtx = useContext(AuthContext);

  const [isClicked, setIsClicked] = useState(false);

  const {
    inputValue: inputNameValue,
    isValid: inputNameIsValid,
    hasError: inputNameHasError,
    onChangeInputHandler: onChangeInputNameHandler,
    onBlurInputHandler: onBlurInputNameHandler,
    clearInput: clearInputName,
  } = useValidation(isNameValid);

  const {
    inputValue: inputAdressValue,
    isValid: inputAdressIsValid,
    hasError: inputAdressHasError,
    onChangeInputHandler: onChangeInputAdressHandler,
    onBlurInputHandler: onBlurInputAdressHandler,
    clearInput: clearInputAdress,
  } = useValidation(isAdressValid);

  const {
    inputValue: inputZipValue,
    isValid: inputZipIsValid,
    hasError: inputZipHasError,
    onChangeInputHandler: onChangeInputZipHandler,
    onBlurInputHandler: onBlurInputZipHandler,
    clearInput: clearInputZip,
  } = useValidation(isZipValid);

  const {
    inputValue: inputPhoneValue,
    isValid: inputPhoneIsValid,
    hasError: inputPhoneHasError,
    onChangeInputHandler: onChangeInputPhoneHandler,
    onBlurInputHandler: onBlurInputPhoneHandler,
    clearInput: clearInputPhone,
  } = useValidation(isPhoneValid);

  let formIsValid = false;

  if (
    (authCtx.isUserSignedIn &&
      foundName &&
      foundAdress &&
      foundZipCode &&
      foundPhoneNumber) ||
    (inputNameIsValid && inputAdressIsValid && inputZipIsValid && inputPhoneIsValid)
  ) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    } else {
      const userData = {
        userName: inputNameValue,
        adress: inputAdressValue,
        zipCode: inputZipValue,
        phoneNumber: inputPhoneValue,
      };

      onAddNewOrder(userData);

      clearInputName();
      clearInputAdress();
      clearInputZip();
      clearInputPhone();
    }
  };

  return (
    <form action="">
      <BoxColumnWrapper>
        <InputContainer>
          <label htmlFor="name">Name:</label>
          <Input
            error={inputNameHasError && !foundName}
            type="text"
            id="name"
            onChange={onChangeInputNameHandler}
            onBlur={onBlurInputNameHandler}
            value={authCtx.isUserSignedIn && !isClicked ? foundName : inputNameValue}
          />
        </InputContainer>
        {inputNameHasError && !foundName && (
          <ErrorMsg>name must be longer than 2 letters</ErrorMsg>
        )}
        <InputContainer>
          <label htmlFor="adress">Adress:</label>
          <Input
            error={inputAdressHasError && !foundAdress}
            type="text"
            id="adress"
            placeholder="Street Number"
            onChange={onChangeInputAdressHandler}
            onBlur={onBlurInputAdressHandler}
            value={
              authCtx.isUserSignedIn && !isClicked ? foundAdress : inputAdressValue
            }
          />
        </InputContainer>
        {inputAdressHasError && !foundAdress && (
          <ErrorMsg>
            Adress must be longer than 3 letters and must contain number
          </ErrorMsg>
        )}
        <InputContainer>
          <label htmlFor="zip">Post Code:</label>
          <Input
            error={inputZipHasError && !foundZipCode}
            type="text"
            id="zip"
            placeholder="xx-xxx"
            onChange={onChangeInputZipHandler}
            onBlur={onBlurInputZipHandler}
            value={
              authCtx.isUserSignedIn && !isClicked ? foundZipCode : inputZipValue
            }
          />
        </InputContainer>
        {inputZipHasError && !foundZipCode && (
          <ErrorMsg>Post code must contain 5 numbers</ErrorMsg>
        )}
        <InputContainer>
          <label htmlFor="telephone">Telephone:</label>
          <Input
            error={inputPhoneHasError && !foundPhoneNumber}
            type="tel"
            id="telephone"
            placeholder="xxx xxx xxx"
            onChange={onChangeInputPhoneHandler}
            onBlur={onBlurInputPhoneHandler}
            value={
              authCtx.isUserSignedIn && foundPhoneNumber
                ? foundPhoneNumber
                : inputPhoneValue
            }
          />
        </InputContainer>
        {inputPhoneHasError && !foundPhoneNumber && (
          <ErrorMsg>Phone number must contain 9 numbers (xxx xxx xxx)</ErrorMsg>
        )}
        <ButtonContainer>
          <SubmitButton
            variant={'brown'}
            disabled={!formIsValid}
            onClick={submitFormHandler}
          >
            Submit
          </SubmitButton>
          {authCtx.isUserSignedIn && (
            <BoxButton
              variant="brown"
              type="button"
              onClick={() => {
                setIsClicked(true);
                clearAllInputs();
              }}
            >
              Edit
            </BoxButton>
          )}
        </ButtonContainer>
      </BoxColumnWrapper>
    </form>
  );
};

export default OrderForm;
