import React, { useState } from 'react';

import styled from 'styled-components';
import BoxButtonBrown from '../../../Ui/BoxButtonBrown';
import BoxColumnWrapper from '../../../Ui/BoxColumnWrapper';
import BoxInputMeals from '../../../Ui/BoxInputMeals';

const MealFormWrapper = styled(BoxColumnWrapper)`
  align-items: center;
  margin-bottom: 20px;
`;

const MealForm = ({ id, onAddItem }) => {
  const [inputAmountState, setInputAmountState] = useState(1);
  const [isFormValid, setIsFormValid] = useState(true);

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (inputAmountState < 1 || inputAmountState > 5) {
      setIsFormValid(false);
      return;
    }
    const amountDatafromForm = +inputAmountState;

    onAddItem(amountDatafromForm);
  };

  const inputAmountHandler = (e) => {
    setInputAmountState(e.target.value);
  };

  return (
    <form action="">
      <MealFormWrapper>
        <BoxInputMeals
          //ref={formInputRef}
          label="Amount:"
          input={{
            id: 'totalAmount' + id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            value: inputAmountState,
            onChange: inputAmountHandler,
          }}
        />
        <BoxButtonBrown onClick={submitFormHandler}>Add</BoxButtonBrown>
        {!isFormValid && <p>Amount have to be between 1-5</p>}
      </MealFormWrapper>
    </form>
  );
};

export default MealForm;
