import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-weight: bold;
  color: #c72d12;
  width: 2.5rem;
  padding: 0.2rem;
  border-radius: 5px;
  border: 1px solid brown;
  outline: none;
  background-color: #ffffff;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    color: #000000;
    background-color: #b6b6b6b1;
  }

  &:focus {
    background-color: #c9c9c9b1;
  }
`;

const BoxButtonWhite = ({ children, className, type, onClick }) => (
  <Button className={className} type={type || 'button'} onClick={onClick}>
    {children}
  </Button>
);

export default BoxButtonWhite;
