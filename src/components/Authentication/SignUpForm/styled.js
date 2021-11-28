import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import BoxButton from '../../Ui/BoxButton';
import BoxWrapper from '../../Layout/BoxWrapper';

const AnimationShow = keyframes`
     from {opacity: 0;}
     to {opacity: 1;}
`;

export const Wrapper = styled(BoxWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin: 1em 20% 10% 20%;
  background: ${(props) => props.theme.color.normal};
  animation: ${AnimationShow} 3s;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.3em;
`;

export const Input = styled.input`
  padding: 0.4em;
  width: 80%;
  margin-top: 0.5em;
  outline: none;
  font-weight: bold;
  border-radius: 5px;
  border: ${(props) =>
    props.error ? '1px solid red' : '1px solid rgba(197, 196, 196, 0.973)'};
  background: ${(props) => (props.error ? '#ff00004e' : 'none')};

  &:focus {
    border: 1px solid ${(props) => props.theme.color.focusInput};
  }
`;

export const ErrorMsg = styled.p`
  color: ${(props) => props.theme.color.errorColor};
  font-size: ${(props) => props.theme.font.extraSmall10};
  text-align: center;
  margin: 0.5em 0 0.2em 0;
`;

export const FeedBack = styled.p`
  color: ${(props) => props.theme.color.main};
  font-size: ${(props) => props.theme.font.extraSmall};
  text-align: center;
  margin: 0.5em 0 0.4em 0;
`;

export const Header = styled.header`
  text-align: center;
  margin-top: 0.5em;
  color: ${(props) => props.theme.color.boldColor};

  @media (max-width: 600px) {
    font-size: ${(props) => props.theme.font.extraSmall};
  }
`;

export const CreateAccText = styled(Header)`
  cursor: pointer;
  margin: 1em;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.color.main};
  text-decoration: none;

  &.active,
  &:visited {
    border-bottom: 2px solid ${(props) => props.theme.color.main};
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid ${(props) => props.theme.color.main};
  }
`;

export const SubmitButton = styled(BoxButton)`
  &:disabled {
    background-color: ${(props) => props.theme.color.submitButtonColor};
    color: black;
    border-color: ${(props) => props.theme.color.submitButtonColor};
    cursor: not-allowed;
  }
`;
