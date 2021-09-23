import React, { useState } from 'react';

import styled from 'styled-components';
import BoxButtonBrown from '../../../Ui/BoxButtonBrown';
import BoxElemWrapper from '../../../Ui/BoxElemWrapper';
import BoxInput from '../../../Ui/BoxInput';

const FormWrapper = styled(BoxElemWrapper)`
  align-items: center;
  margin-bottom: 20px;
`;

const MealForm = ({ id, onAddItem }) => {
  //const formInputRef = useRef();
  const [inputAmountState, setInputAmountState] = useState(1);
  const [isFormValid, setIsFormValid] = useState(true);

  const submitFormHandler = (e) => {
    e.preventDefault();
    // const inputRefData = formInputRef.current.value;
    // const inputRefDataNumber = +inputRefData;
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
      <FormWrapper>
        <BoxInput
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
      </FormWrapper>
    </form>
  );
};

export default MealForm;
