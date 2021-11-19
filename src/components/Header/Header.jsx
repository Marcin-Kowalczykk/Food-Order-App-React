import React, { Fragment } from 'react';

import CartButton from '../CartElements/CartButton';
import Description from '../Description/Description';

import { Nav, H1, ImgSection, Img } from '.';

const Header = ({ onShowModalHandler }) => {
  return (
    <Fragment>
      <Nav>
        <H1>Food Order App</H1>
        <CartButton onShowModalHandler={onShowModalHandler} />
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
