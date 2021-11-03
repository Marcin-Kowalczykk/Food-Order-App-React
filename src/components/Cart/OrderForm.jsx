import React from 'react';

import BoxColumnWrapper from '../Ui/BoxColumnWrapper';
import BoxButtonBrown from '../Ui/BoxButtonBrown';
import styled, { keyframes } from 'styled-components';

import useValidation from '../../hooks/use-validation';

const AnimationShow = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`;

const InputContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 2em 0 2em;
  animation: ${AnimationShow} 1s;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Input = styled.input`
  width: 70%;
  outline: none;
  border: ${(props) =>
    props.error ? '1px solid red' : '1px solid rgba(197, 196, 196, 0.973)'};
  background: ${(props) => (props.error ? '#ff00004e' : 'none')};
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  margin-left: 5px;
`;

const ErrorMsg = styled.p`
  color: #ff0000df;
  font-size: 12px;
  text-align: end;
  margin: 0 3em 0 0;

  @media (max-width: 600px) {
    font-size: 7px;
  }
`;

const ButtonContainer = styled.section`
  text-align: center;
  margin: 1em 0 1em 0;
  animation: ${AnimationShow} 1s;
`;

const SubmitButton = styled(BoxButtonBrown)`
  &:disabled {
    background-color: #ccc;
    color: #292929;
    border-color: #ccc;
    cursor: not-allowed;
  }
`;

const OrderForm = ({ onAddNewOrder }) => {
  const hasNumber = /\d/; // for checking do input contain numbers

  const {
    inputValue: inputNameValue,
    isValid: inputNameIsValid,
    hasError: inputNameHasError,
    onChangeInputHandler: onChangeInputNameHandler,
    onBlurInputHandler: onBlurInputNameHandler,
    clearInput: clearInputName,
  } = useValidation(
    (inputValue) => inputValue.trim() !== '' && inputValue.length > 2
  );

  const {
    inputValue: inputAdressValue,
    isValid: inputAdressIsValid,
    hasError: inputAdressHasError,
    onChangeInputHandler: onChangeInputAdressHandler,
    onBlurInputHandler: onBlurInputAdressHandler,
    clearInput: clearInputAdress,
  } = useValidation(
    (inputValue) =>
      inputValue.trim() !== '' && inputValue.length > 3 && hasNumber.test(inputValue)
  );

  const {
    inputValue: inputZipValue,
    isValid: inputZipIsValid,
    hasError: inputZipHasError,
    onChangeInputHandler: onChangeInputZipHandler,
    onBlurInputHandler: onBlurInputZipHandler,
    clearInput: clearInputZip,
  } = useValidation(
    (inputValue) =>
      inputValue.length == 6 &&
      inputValue.includes('-') &&
      hasNumber.test(inputValue)
  );

  const {
    inputValue: inputPhoneValue,
    isValid: inputPhoneIsValid,
    hasError: inputPhoneHasError,
    onChangeInputHandler: onChangeInputPhoneHandler,
    onBlurInputHandler: onBlurInputPhoneHandler,
    clearInput: clearInputPhone,
  } = useValidation((inputValue) => inputValue.length == 9);

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

    if (
      !inputNameIsValid ||
      !inputAdressIsValid ||
      !inputZipIsValid ||
      !inputPhoneIsValid
    ) {
      return;
    } else {
      const userData = {
        userName: inputNameValue,
        adress: inputAdressValue,
        zipCode: inputZipValue,
        phoneNumber: inputPhoneValue,
      };

      onAddNewOrder(userData);

      console.log('form is subbmited');

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
            Adress must be longer than 4 letters and must have number
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
            placeholder="xxx-xxx-xxx"
            onChange={onChangeInputPhoneHandler}
            onBlur={onBlurInputPhoneHandler}
            value={inputPhoneValue}
          />
        </InputContainer>
        {inputPhoneHasError && (
          <ErrorMsg>Phone number must contain 9 numbers</ErrorMsg>
        )}
        <ButtonContainer>
          <SubmitButton disabled={!formIsValid} onClick={submitFormHandler}>
            Submit
          </SubmitButton>
        </ButtonContainer>
      </BoxColumnWrapper>
    </form>
  );
};

export default OrderForm;
