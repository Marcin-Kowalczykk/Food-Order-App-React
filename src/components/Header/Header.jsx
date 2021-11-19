import React, { Fragment } from 'react';

import CartButton from '../CartElements/CartButton';
import Description from '../Description/Description';
import ThemeSwitch from '../Ui/ThemeSwitch';

import { Nav, IconsSection, H1, ImgSection, Img } from '.';

const Header = ({ onShowModal, onToggleTheme }) => {
  return (
    <Fragment>
      <Nav>
        <H1>Food Order App</H1>
        <IconsSection>
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
