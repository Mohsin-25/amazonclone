import React from "react";
import "./Product.css";
import { CartState } from "./Context";

export default function Product({ items }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  // console.log(items);
  const add = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: items.id,
        company: items.company,
        title: items.title,
        image: items.image,
        price: items.price,
        rating: items.rating,
        reviews: items.reviews,
      },
    });
  };
  const remove = () => {
    dispatch({
      type: "REMOVE_FROM_CART_DIRECTLY_FROM_HOME",
      item: {
        id: items.id,
        company: items.cpmpany,
        title: items.title,
        image: items.image,
        price: items.price,
        rating: items.rating,
        reviews: items.reviews,
      },
    });
  };
  return (
    <div>
      <div className="product">
      <div className="pimagediv">
        <img src={items.image} alt="" className="pimage" />
      </div>
        <div className="pinfo">
          <p className="pcompany">{items.company}</p>

          <p className="ptitle">{items.title}</p>
          <p className="prating">
            {Array(items.rating)
              .fill()
              .map((_, index) => {
                return (
                  <span className="stars" key={index}>
                    &#9733;
                  </span>
                );
              })}
            {Array(5 - items.rating)
              .fill()
              .map((_, index) => {
                return <span key={index}>&#9734;</span>;
              })}{" "}
            <span className="reviews"> ({items.reviews})</span>
          </p>
          <span>
            {" "}
            <small>
              <strike>{Number(items.price) + Number(items.price) / 5}</strike>
            </small>
          </span>
          <span className="pprice">
            <small>&#8377;</small>
            {Number(items.price.split(".")[0])}
          </span>
       
        {cart.some((prod) => prod.id === items.id) ? (
          <button onClick={remove} className="btn remove ">
            Remove From Cart
          </button>
        ) : (
          <button onClick={add} className="btn add">
            Add to Cart
          </button>
        )}
         </div>
      </div>
    </div>
  );
}
