import React from 'react';

import styled from 'styled-components';
import BoxBoldText from './BoxBoldText';
import BoxElemWrapper from './BoxElemWrapper';

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

const BoxInput = ({ input, children, id, label }) => {
  return (
    <BoxElemWrapper>
      <BoxBoldText htmlFor={id}>{label}</BoxBoldText>
      <Input id={id} {...input}>
        {children}
      </Input>
    </BoxElemWrapper>
  );
};

export default BoxInput;
