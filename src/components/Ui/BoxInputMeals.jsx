import React from 'react';

import styled from 'styled-components';
import BoxBoldText from './BoxBoldText';
import BoxColumnWrapper from './BoxColumnWrapper';

const Label = styled(BoxBoldText)`
  margin-left: 0.5em;

  @media (max-width: 600px) {
    margin-left: 1em;
  }
`;

const Input = styled.input`
  width: 3em;
  outline: none;
  border: none;
  border-radius: 5px;
  background: var(--tomato-elements-color);
  color: var(--white-font-color);
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  margin-left: 1em;
`;

const BoxInputMeals = ({ input, children, id, label }) => {
  return (
    <BoxColumnWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...input}>
        {children}
      </Input>
    </BoxColumnWrapper>
  );
};

export default BoxInputMeals;
