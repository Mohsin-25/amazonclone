import React, {
  createContext,
  useContext,
  useReducer,
} from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducer";

// export const mycontext = React.createContext();
// export const Provider = mycontext.Provider;
// export const Consumer = mycontext.Consumer;
const Cart = createContext();
faker.seed(99);

export default function Context({ children }) {
  const items = [...Array(23)].map(() => ({
    id: faker.datatype.uuid(),
    company: faker.company.name(),
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    // image: faker.image.image(),
    image: faker.image.city(640, 480, true),
    rating: Math.ceil(Math.random() * 5),
    reviews: faker.datatype.number({ max: 500, precision: 1 }),
  }));
  //   const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(cartReducer, {
    items: items,
    cart: [
      //   {
      //     id: "111",
      //     title: "Electric Grinder",
      //     price: 3299,
      //     rating: 5,
      //     image: "./photos//Tools1x._SY116_CB424026090_.jpg",
      //   },
    ],
    user: null,
  });
  //   return <Cart.Provider value={products}>{children}</Cart.Provider>;
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}
export const CartState = () => {
  return useContext(Cart);
};
