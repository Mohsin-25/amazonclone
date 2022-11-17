export const initialState = {
  cart: [
    // {
    //   id: 44,
    //   src: "https://m.media-amazon.com/images/I/41Qduy7aggL._AC_UL320_.jpg",
    //   company: "",
    //   name: "Evaluemart Stainless Steel Sink Strainer Kitchen Drain Basin Basket Filter Stopper Drainer/Jali (4-inch/10 cm)",
    //   rating: 5,
    //   reviews: 2000,
    //   cost: 99,
    //   originalCost: 120,
    //   discount: 18,
    //   isDealOfTheDay: false,
    //   isPrime: true,
    //   isFreeDelivery: true,
    //   isAmazonsChoice: true,
    //   isBestSeller: false,
    // },
  ],
  user: null,
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "Add_To_Cart":
      return { ...state, cart: [...state.cart, { ...action.item, qty: 1 }] };

    case "Remove_From_Cart":
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.item.id),
      };

    case "Change_Item_Quantity":
      return {
        ...state,
        cart: state.cart.filter((cartItem) =>
          cartItem.id === action.item.id
            ? (cartItem.qty = action.item.qty)
            : cartItem.qty
        ),
      };

    case "Remove_From_Cart_From_Checkout":
      let newCart = [...state.cart];
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      if (index >= 0) {
        newCart.splice(index, 1);
      }
      return { ...state, cart: newCart };

    case "Set_User":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;

export const getCartTotal = (cart) => {
  cart?.reduce((amount, item) => item.price + amount, 0);
};
