import React from 'react';

import styled, { keyframes } from 'styled-components';

const AnimationShow = keyframes`
     from {opacity: 0;}
     to {opacity: 1;}
`;

const ShadowWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300%;
  background: rgba(0, 0, 0, 0.75);
  z-index: 5;
  animation: ${AnimationShow} 2s;
`;

const Shadow = ({ onHideModalHandler }) => {
  return <ShadowWrapper onClick={onHideModalHandler} />;
};

export default Shadow;
