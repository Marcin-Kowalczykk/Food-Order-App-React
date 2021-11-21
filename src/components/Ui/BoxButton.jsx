import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  font-weight: bold;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.5s;

  background-color: ${(props) => props.theme.color.darkButtonColor};

  ${({ variant }) =>
    variant === 'brown' &&
    css`
      border: none;
      color: white;
      width: 5em;
      padding: 0.5em;
      border-radius: 20px;
      background-color: ${(props) => props.theme.color.darkButtonColor};

      &:hover {
        background-color: ${(props) => props.theme.color.darkButtonColorHover};
      }

      &:focus {
        background-color: ${(props) => props.theme.color.darkButtonColorHover};
      }
    `}

  ${({ variant }) =>
    variant === 'white' &&
    css`
      border: 1px solid brown;
      width: 2.5em;
      padding: 0.2em;
      border-radius: 5px;
      background-color: ${(props) => props.theme.color.lightButtonColor};

      &:hover {
        background-color: ${(props) => props.theme.color.lightButtonColorHover};
      }

      &:focus {
        background-color: ${(props) => props.theme.color.lightButtonColorHover};
      }
    `}
`;

const BoxButton = ({ children, className, type, onClick, disabled, variant }) => (
  <Button
    className={className}
    type={type || 'button'}
    onClick={onClick}
    disabled={disabled}
    variant={variant}
  >
    {children}
  </Button>
);

export default BoxButton;
