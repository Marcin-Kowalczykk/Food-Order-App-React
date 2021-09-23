import React, { useReducer } from 'react';

import CartContext from './CartContext';

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const LatestTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const indexItemsInCart = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const itemInCart = state.items[indexItemsInCart];

    let updatedItems;

    if (itemInCart) {
      const updatedItem = {
        ...itemInCart,
        amount: itemInCart.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[indexItemsInCart] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: LatestTotalAmount,
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    const indexItemsInCart = state.items.findIndex((item) => item.id === action.id);
    const itemInCart = state.items[indexItemsInCart];
    const LatestTotalAmount = state.totalAmount - itemInCart.price;

    let updatedItems;

    if (itemInCart.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...itemInCart, amount: itemInCart.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[indexItemsInCart] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: LatestTotalAmount,
    };
  }

  return initialCartState;
};

const CartProvider = (props) => {
  /* const [cartState, setCartState] = useState([]);
  const [priceState, setPriceState] = useState(0);
  
  const addItemHandler = (item) => { 
    const itemsArray = items.concat(item);
    setCartState(itemsArray);
    const LatestItem = itemsArray.price;
    setPriceState(LatestItem); 
  }; */

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
