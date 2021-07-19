import React from 'react';

import styled from 'styled-components';
import BoxButton from '../../../Ui/BoxButton';
import BoxBoldText from '../../../Ui/BoxBoldText';
import BoxElemWrapper from '../../../Ui/BoxElemWrapper';

const Input = styled.input`
  width: 3rem;
  outline: none;
  border: none;
  border-radius: 5px;
  background: tomato;
  color: white;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;

const FormWrapper = styled(BoxElemWrapper)`
  align-items: center;
  margin-bottom: 20px;
`;

const MealForm = () => {
  return (
    <form action="">
      <FormWrapper>
        <BoxBoldText htmlFor="inputAmount">Amount</BoxBoldText>
        <Input id="inputAmount" type="number" />
        <BoxButton>Add</BoxButton>
      </FormWrapper>
    </form>
  );
};

export default MealForm;
