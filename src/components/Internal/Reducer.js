export const cartReducer = (state, action) => {
  //   console.log(action);

  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.item, qty: 1 }] };

    case "REMOVE_FROM_CART_DIRECTLY_FROM_HOME":
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.item.id),
      };

    case "CHANGE_CART_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((cartItem) =>
          cartItem.id === action.item.id
            ? (cartItem.qty = action.item.qty)
            : cartItem.qty
        ),
      };

    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Can't remove item (id: ${action.id})`);
      }
      return {
        ...state,
        cart: newCart,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export const getCartTotal = (cart) => {
  cart?.reduce((amount, item) => item.price + amount, 0);
};
