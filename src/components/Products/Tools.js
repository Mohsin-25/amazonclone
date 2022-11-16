import React from "react";
import "./ProductPage.css";
import NavbarMain from "../Navbar/NavbarMain";
import ProductCard from "./ProductCard";
import { StateContext, useStateValue } from "../StateProvider";
import { productTools } from "./ProductList";

export default function Tools() {
  // const [{ cart }, dispatch] = useStateValue();

  // const { productTools } = useStateValue(StateContext);

  // const {
  //   state: { items },
  // } = CartState();
  return (
    <div>
      <NavbarMain />
      <div className="productPage">
        {productTools.map((item, index) => (
          <ProductCard
            key={index}
            // id={item.id}
            // src={item.src}
            // name={item.name}
            // rating={item.rating}
            // reviews={item.reviews}
            // isDealOfTheDay={item.isDealOfTheDay}
            // cost={item.cost}
            // originalCost={item.originalCost}
            // discount={item.discount}
            // isPrime={item.isPrime}
            // isFreeDelivery={item.isFreeDelivery}
            // isAmazonsChoice={item.isAmazonsChoice}
            // isBestSeller={item.isBestSeller}

            {...item}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
}
