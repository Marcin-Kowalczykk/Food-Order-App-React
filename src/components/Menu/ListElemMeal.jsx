import React from 'react';

import styled from 'styled-components';
import BoxButton from '../Ui/BoxButton';

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 2px solid tomato;
  margin: 1rem 2rem 1rem 0;

  @media (max-width: 600px) {
    font-size: 0.7rem;
    margin: 0.3rem 1.2rem 0.3rem -1rem;
  }
`;

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormSection = styled(MainSection)`
  align-items: center;
  margin-bottom: 10px;
`;

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

const Label = styled.label`
  font-weight: bold;
  color: #c72d12;
`;

const ListElemMeal = ({ title, desc, price }) => {
  return (
    <Li>
      <MainSection>
        <Label>{title}</Label>
        <div>{desc}</div>
        <Label>{price}</Label>
      </MainSection>
      <FormSection>
        <Label htmlFor="inputAmount">Amount</Label>
        <Input id="inputAmount" type="number" />
        <BoxButton>Add</BoxButton>
      </FormSection>
    </Li>
  );
};

export default ListElemMeal;
