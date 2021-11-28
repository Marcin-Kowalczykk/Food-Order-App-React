import React, { Fragment, useContext } from 'react';

import CartButton from '../CartElements/CartButton';
import Description from '../Description/Description';
import ThemeSwitch from '../Ui/ThemeSwitch';

import AuthContext from '../../store/AuthContext';

import { MAIN_PAGE_LINK } from '../../Links';
import { SIGN_IN_LINK } from '../../Links';
import { RESTAURANT_IMAGE } from '../../Links';

import {
  Nav,
  IconsSection,
  H1,
  ImgSection,
  Img,
  LogButton,
  StyledLink,
  StyledLinkButton,
} from '.';

const Header = ({ onShowModal, onToggleTheme }) => {
  const authCtx = useContext(AuthContext);

  const isLogged = authCtx.token;

  return (
    <Fragment>
      <Nav>
        <H1>
          <StyledLink to={MAIN_PAGE_LINK}>Food Order App</StyledLink>
        </H1>
        <IconsSection>
          {!isLogged && (
            <LogButton variant={'brown'}>
              <StyledLinkButton to={SIGN_IN_LINK}>Login</StyledLinkButton>
            </LogButton>
          )}
          {isLogged && (
            <LogButton variant={'brown'} onClick={authCtx.logoutHandler}>
              Logout
            </LogButton>
          )}
          <CartButton onShowModal={onShowModal} />
          <ThemeSwitch onToggleTheme={onToggleTheme} />
        </IconsSection>
      </Nav>
      <ImgSection>
        <Img src={RESTAURANT_IMAGE} alt="Restaurant Image" />
      </ImgSection>
      <Description />
    </Fragment>
  );
};

export default Header;
