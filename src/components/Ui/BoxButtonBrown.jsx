import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-weight: bold;
  color: var(--white-font-color);
  width: 5rem;
  padding: 0.5rem;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: var(--dark-button-color);
  cursor: pointer;
  transition: background-color 0.5s;
  &:hover {
    background-color: var(--dark-button-hover);
  }
  &:focus {
    background-color: var(--dark-button-hover);
  }
`;

const BoxButtonBrown = ({ children, className, type, onClick, disabled }) => (
  <Button
    className={className}
    type={type || 'button'}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </Button>
);

export default BoxButtonBrown;
