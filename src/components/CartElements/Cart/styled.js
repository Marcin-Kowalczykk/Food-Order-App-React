import styled, { keyframes } from 'styled-components';
import BoxWrapper from '../../Layout/BoxWrapper';

const AnimationShow = keyframes`
    from {top: -300px;}
    to {top: 5vh;}
`;

export const ContentWrapper = styled(BoxWrapper)`
  position: fixed;
  top: 5vh;
  left: 28%;
  overflow: hidden;
  width: 80%;
  max-width: 35em;
  z-index: 25;
  animation: ${AnimationShow} 1s;
  background: ${(props) => props.theme.color.normal};

  @media (max-width: 600px) {
    max-height: 35em;
    left: 10%;
  }
`;

export const Ul = styled.ul`
  max-height: 10em;
  overflow: scroll;
`;
