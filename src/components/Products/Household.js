import React from "react";
import "./ProductPage.css";
import NavbarMain from "../Navbar/NavbarMain";
import ProductCard from "./ProductCard";
import { productHousehold } from "./ProductList";

export default function Household() {
  return (
    <div>
      <NavbarMain />
      <div className="productPage">
        {productHousehold.map((item, index) => (
          <ProductCard
            key={index}
            // id={item.id}
            // src={item.src}
            // company={item.company}
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
