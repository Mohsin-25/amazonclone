import React from "react";
import "./Category.css";

import { category } from "../Internal/CategoryBoxItems";
import CategoryBox from "../Internal/CategoryBox";

export default function Category() {
  return (
    <div className="category">
      {category.map((item, index) => (
        <CategoryBox
          key={index}
          // title={item.title}
          // src1={item.src1}
          // src2={item.src2}
          // src3={item.src3}
          // src4={item.src4}
          // alt1={item.alt1}
          // alt2={item.alt2}
          // alt3={item.alt3}
          // alt4={item.alt4}
          // to={item.to}
          {...item}
        ></CategoryBox>
      ))}
    </div>
  );
}
