import React from 'react';

import styled from 'styled-components';

const BoldText = styled.label`
  font-weight: bold;
  color: var(--bold-elements-color);
`;

const BoxBoldText = ({ children, className }) => {
  return <BoldText className={className}>{children}</BoldText>;
};

export default BoxBoldText;
