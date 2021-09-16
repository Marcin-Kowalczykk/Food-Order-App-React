import React, { useReducer } from 'react';

import CartContext from './CartContext';

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const cartArray = state.items.concat(action.item);
    const LatestTotalAmount =
      state.totalAmount + action.items.price * action.item.amount;
    return {
      items: cartArray,
      totalAmount: LatestTotalAmount,
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    state.type = 1;
  }
  return initialCartState;
};

const CartProvider = (props) => {
  const [cartState, setCartState] = useState([]);
  const [priceState, setPriceState] = useState(0);
  
  const addItemHandler = (item) => { 
    const itemsArray = items.concat(item);
    setCartState(itemsArray);
    const LatestIteam = itemsArray.
    setPriceState(); 
  };
  

  const [cartState, dispatchCartState] = useReducer(cartReducer, initialCartState);

  const addItemHandler = (item) => {
    dispatchCartState({ type: 'ADD_ITEM', item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartState({ type: 'REMOVE_ITEM', id: id });
  };

  const cartContext = {
    items: cartState.items, // cartState
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
