import React from 'react';

import styled from 'styled-components';

const BoldText = styled.label`
  font-weight: bold;
  color: #c72d12;
`;

const BoxBoldText = ({ children }) => {
  return <BoldText>{children}</BoldText>;
};

export default BoxBoldText;
