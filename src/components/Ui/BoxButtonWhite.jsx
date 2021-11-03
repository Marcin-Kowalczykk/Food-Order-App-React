import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-weight: bold;
  width: 2.5rem;
  padding: 0.2rem;
  border-radius: 5px;
  border: 1px solid brown;
  outline: none;
  background-color: var(--white-button-color);
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: var(--light-button-hover);
  }

  &:focus {
    background-color: var(--light-button-hover);
  }
`;

const BoxButtonWhite = ({ children, className, type, onClick }) => (
  <Button className={className} type={type || 'button'} onClick={onClick}>
    {children}
  </Button>
);

export default BoxButtonWhite;
