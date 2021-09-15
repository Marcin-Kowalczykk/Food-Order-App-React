import React from 'react';

import styled from 'styled-components';
import BoxButtonBrown from '../../../Ui/BoxButtonBrown';
import BoxElemWrapper from '../../../Ui/BoxElemWrapper';
import BoxInput from '../../../Ui/BoxInput';

const FormWrapper = styled(BoxElemWrapper)`
  align-items: center;
  margin-bottom: 20px;
`;

const MealForm = ({ id }) => {
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
            defaultValue: '1',
          }}
        />
        <BoxButtonBrown>Add</BoxButtonBrown>
      </FormWrapper>
    </form>
  );
};

export default MealForm;
