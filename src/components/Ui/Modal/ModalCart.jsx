import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Shadow from './Shadow';
import Cart from '../../Cart/Cart';

const ModalCart = ({ onHideModalHandler }) => {
  const portal = document.getElementById('modal-root');

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Shadow onHideModalHandler={onHideModalHandler} />,
        portal
      )}
      {ReactDOM.createPortal(
        <Cart onHideModalHandler={onHideModalHandler} />,
        portal
      )}
    </Fragment>
  );
};

export default ModalCart;
