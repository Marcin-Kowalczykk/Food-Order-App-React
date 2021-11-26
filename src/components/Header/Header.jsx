import React, { Fragment } from 'react';

import CartButton from '../CartElements/CartButton';
import Description from '../Description/Description';
import ThemeSwitch from '../Ui/ThemeSwitch';

import {
  Nav,
  IconsSection,
  H1,
  ImgSection,
  Img,
  LoginButton,
  StyledLink,
  StyledLinkButton,
} from '.';

const Header = ({ onShowModal, onToggleTheme }) => {
  return (
    <Fragment>
      <Nav>
        <H1>
          <StyledLink to="/Food-Order-App-React/main">Food Order App</StyledLink>
        </H1>
        <IconsSection>
          <LoginButton variant={'brown'}>
            <StyledLinkButton to="/Food-Order-App-React/auth-sign-in">
              Login
            </StyledLinkButton>
          </LoginButton>
          <CartButton onShowModal={onShowModal} />
          <ThemeSwitch onToggleTheme={onToggleTheme} />
        </IconsSection>
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
