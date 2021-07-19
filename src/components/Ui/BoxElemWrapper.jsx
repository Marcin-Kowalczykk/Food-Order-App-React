import React from 'react';

import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const BoxElemWrapper = ({ children, className }) => {
  return <Section className={className}>{children}</Section>;
};

export default BoxElemWrapper;
