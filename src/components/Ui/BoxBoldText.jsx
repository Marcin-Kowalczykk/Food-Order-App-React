import React from 'react';

import styled from 'styled-components';

const BoldText = styled.label`
  font-weight: bold;
  color: #c72d12;
`;

const BoxBoldText = ({ children, className }) => {
  return <BoldText className={className}>{children}</BoldText>;
};

export default BoxBoldText;
