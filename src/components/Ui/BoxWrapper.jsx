import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  background: white;
  border-radius: 10px;
  width: 80%;
  margin-top: 7rem;
`;

const BoxWrapper = ({ children, className, id }) => {
  return (
    <Wrapper className={className} id={id}>
      {children}
    </Wrapper>
  );
};

export default BoxWrapper;
