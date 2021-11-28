import React from 'react';

import BoxColumnWrapper from '../../Layout/BoxColumnWrapper';
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

const OrderForm = ({ onAddNewOrder }) => {
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
    inputNameIsValid &&
    inputAdressIsValid &&
    inputZipIsValid &&
    inputPhoneIsValid
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
            error={inputNameHasError}
            type="text"
            id="name"
            onChange={onChangeInputNameHandler}
            onBlur={onBlurInputNameHandler}
            value={inputNameValue}
          />
        </InputContainer>
        {inputNameHasError && (
          <ErrorMsg>name must be longer than 2 letters</ErrorMsg>
        )}
        <InputContainer>
          <label htmlFor="adress">Adress:</label>
          <Input
            error={inputAdressHasError}
            type="text"
            id="adress"
            placeholder="Street Number"
            onChange={onChangeInputAdressHandler}
            onBlur={onBlurInputAdressHandler}
            value={inputAdressValue}
          />
        </InputContainer>
        {inputAdressHasError && (
          <ErrorMsg>
            Adress must be longer than 3 letters and must contain number
          </ErrorMsg>
        )}
        <InputContainer>
          <label htmlFor="zip">Post Code:</label>
          <Input
            error={inputZipHasError}
            type="text"
            id="zip"
            placeholder="xx-xxx"
            onChange={onChangeInputZipHandler}
            onBlur={onBlurInputZipHandler}
            value={inputZipValue}
          />
        </InputContainer>
        {inputZipHasError && <ErrorMsg>Post code must contain 5 numbers</ErrorMsg>}
        <InputContainer>
          <label htmlFor="telephone">Telephone:</label>
          <Input
            error={inputPhoneHasError}
            type="tel"
            id="telephone"
            placeholder="xxx xxx xxx"
            onChange={onChangeInputPhoneHandler}
            onBlur={onBlurInputPhoneHandler}
            value={inputPhoneValue}
          />
        </InputContainer>
        {inputPhoneHasError && (
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
        </ButtonContainer>
      </BoxColumnWrapper>
    </form>
  );
};

export default OrderForm;
