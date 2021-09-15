import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Shadow from './Shadow';
import Cart from '../../Cart/Cart';

const ModalCart = ({ onHideModalHandler, dataToCart, totalPrice }) => {
  const portal = document.getElementById('modal-root');

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Shadow onHideModalHandler={onHideModalHandler} />,
        portal
      )}
      {ReactDOM.createPortal(
        <Cart
          onHideModalHandler={onHideModalHandler}
          totalPrice={totalPrice}
          dataToCart={dataToCart}
        />,
        portal
      )}
    </Fragment>
  );
};

export default ModalCart;
