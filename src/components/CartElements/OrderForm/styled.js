import styled, { keyframes } from 'styled-components';
import BoxButton from '../../Ui/BoxButton';

const AnimationShow = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`;

export const InputContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 2em 0 2em;
  animation: ${AnimationShow} 1s;

  @media (max-width: 600px) {
    font-size: ${(props) => props.theme.font.extraSmall};
  }
`;

export const Input = styled.input`
  width: 70%;
  outline: none;
  border: ${(props) =>
    props.error ? '1px solid red' : '1px solid rgba(197, 196, 196, 0.973)'};
  background: ${(props) => (props.error ? '#ff00004e' : 'none')};
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  margin-left: 5px;
`;

export const ErrorMsg = styled.p`
  color: ${(props) => props.theme.color.errorColor};
  font-size: ${(props) => props.theme.font.extraSmall};
  text-align: end;
  margin: 0 3em 0 0;

  @media (max-width: 600px) {
    font-size: 7px;
  }
`;

export const ButtonContainer = styled.section`
  text-align: center;
  margin: 1em 0 1em 0;
  animation: ${AnimationShow} 1s;
`;

export const SubmitButton = styled(BoxButton)`
  &:disabled {
    background-color: ${(props) => props.theme.color.submitButtonColor};
    color: black;
    border-color: ${(props) => props.theme.color.submitButtonColor};
    cursor: not-allowed;
  }
`;
