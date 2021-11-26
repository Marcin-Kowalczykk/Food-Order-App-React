import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
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

const BoxLink = ({ children, link }) => {
  return <StyledLink to={link}>{children}</StyledLink>;
};

export default BoxLink;
