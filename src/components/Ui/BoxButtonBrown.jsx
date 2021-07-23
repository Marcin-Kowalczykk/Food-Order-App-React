import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-weight: bold;
  color: white;
  width: 5rem;
  padding: 0.5rem;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: #5f3028;
  cursor: pointer;
  transition: background-color 0.5s;
  &:hover {
    background-color: #ad3824;
  }
  &:focus {
    background-color: #ad3824;
  }
`;

const BoxButtonBrown = ({ children, className, type, onClick }) => (
  <Button className={className} type={type || 'button'} onClick={onClick}>
    {children}
  </Button>
);

export default BoxButtonBrown;
