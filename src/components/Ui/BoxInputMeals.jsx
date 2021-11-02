import React from 'react';

import styled from 'styled-components';
import BoxBoldText from './BoxBoldText';
import BoxColumnWrapper from './BoxColumnWrapper';

const Input = styled.input`
  width: 3rem;
  outline: none;
  border: none;
  border-radius: 5px;
  background: #ff6347ca;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  margin-left: 5px;
`;

const BoxInputMeals = ({ input, children, id, label }) => {
  return (
    <BoxColumnWrapper>
      <BoxBoldText htmlFor={id}>{label}</BoxBoldText>
      <Input id={id} {...input}>
        {children}
      </Input>
    </BoxColumnWrapper>
  );
};

export default BoxInputMeals;
