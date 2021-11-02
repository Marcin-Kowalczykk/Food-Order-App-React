import React from 'react';

import BoxColumnWrapper from '../Ui/BoxColumnWrapper';
import BoxButtonBrown from '../Ui/BoxButtonBrown';
import styled, { keyframes } from 'styled-components';

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
  border: 1px solid rgb(185, 185, 185);
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  margin-left: 5px;
`;

const ButtonContainer = styled.section`
  text-align: center;
  margin: 1em 0 1em 0;
  animation: ${AnimationShow} 1s;
`;

const OrderForm = () => {
  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log('form is subbmited');
  };

  return (
    <form action="">
      <BoxColumnWrapper>
        <InputContainer>
          <label htmlFor="">Name:</label>
          <Input type="text" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="">Adress:</label>
          <Input type="text" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="">Post Code:</label>
          <Input type="number" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="">Telephone:</label>
          <Input type="number" />
        </InputContainer>
        <ButtonContainer>
          <BoxButtonBrown onClick={submitFormHandler}>Submit</BoxButtonBrown>
        </ButtonContainer>
      </BoxColumnWrapper>
    </form>
  );
};

export default OrderForm;
