import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const BoxColumnWrapper = ({ children, className }) => {
  return <Section className={className}>{children}</Section>;
};

export default BoxColumnWrapper;
