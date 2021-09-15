import React, { useState } from 'react';

import styled from 'styled-components';
import BoxButtonBrown from '../../../Ui/BoxButtonBrown';
import BoxElemWrapper from '../../../Ui/BoxElemWrapper';
import BoxInput from '../../../Ui/BoxInput';

const FormWrapper = styled(BoxElemWrapper)`
  align-items: center;
  margin-bottom: 20px;
`;

const MealForm = ({ id, onSaveMealData }) => {
  const [selectedAmount, setSelectedAmount] = useState(1);

  const addMealToCart = (event) => {
    event.preventDefault();
    const mealDatafromForm = {
      amount: +selectedAmount,
    };
    onSaveMealData(mealDatafromForm);
  };

  const inputAmountHandler = (event) => {
    setSelectedAmount(event.target.value);
  };

  return (
    <form action="">
      <FormWrapper>
        <BoxInput
          label="Amount:"
          input={{
            id: 'inputAmount' + id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            value: selectedAmount,
            onChange: inputAmountHandler,
          }}
        />
        <BoxButtonBrown onClick={addMealToCart}>Add</BoxButtonBrown>
      </FormWrapper>
    </form>
  );
};

export default MealForm;
