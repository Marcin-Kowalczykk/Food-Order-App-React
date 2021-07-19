import React, { Fragment } from 'react';

import styled from 'styled-components';

import CartButton from './CartButon';
import Description from './Description';

const Nav = styled.nav`
  position: fixed;
  bottom: 1;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  z-index: 1;
`;

const H1 = styled.h1`
  margin-left: 1rem;
  font-weight: 900;
  color: tomato;
`;

const ImgSection = styled.section`
  width: 100%;
  height: 22rem;
  z-index: 0;
  overflow: hidden;
`;

const Img = styled.img`
  width: 110%;
  height: 100%;
  object-fit: cover;
  transform: rotateZ(-4deg) translateY(-4rem) translateX(-1rem);
`;

const Header = () => {
  return (
    <Fragment>
      <Nav>
        <H1>Food Order App</H1>
        <CartButton />
      </Nav>
      <ImgSection>
        <Img
          src="https://nessarestaurant.com/wp-content/uploads/2018/11/Restaurant-Food.jpg"
          alt="Restaurant Image"
        />
      </ImgSection>
      <Description />
    </Fragment>
  );
};

export default Header;
