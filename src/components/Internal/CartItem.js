import React from "react";
import "./CartItem.css";
import { CartState } from "./Context";

export default function CartItem(props) {
  const {
    // state: { cart },
    dispatch,
  } = CartState();
  // console.log(cart);

  const removeFromCart = () => {
    // dispatch({
    //   type: "REMOVE_FROM_CART",
    //   payload: props.items,
    // });

    dispatch({
      type: "REMOVE_FROM_CART",
      id: props.id,
    });
  };
  const changeQuantity = (e) => {
    dispatch({
      type: "CHANGE_CART_QUANTITY",
      item: {
        id: props.id,
        qty: e.target.value,
      },
    });
  };

  return (
    <div>
      <div className="cart-item">
        <div className="cart-img-div">
          <img src={props.image} alt="" className="cart-img" />
        </div>

        <div className="cart-item-info">
          <p className="pcompany">{props.company}</p>
          <p className="ptitle">{props.title}</p>
          <p>
            {Array(props.rating)
              .fill()
              .map((_, index) => {
                return (
                  <span className="stars" key={index}>
                    &#9733;
                  </span>
                );
              })}
            {Array(5 - props.rating)
              .fill()
              .map((_, index) => {
                return <span key={index}>&#9734;</span>;
              })}
            <span className="reviews">-({props.reviews})</span>
          </p>
          <span className="pprice">
            <small>&#8377;</small>
            {Number(props.price.split(".")[0])}
          </span>
          <span>
            {" "}
            <small>
              <strike>{Number(props.price) + Number(props.price) / 5}</strike>
            </small>
          </span>
          <div className="qty-div">
            <label htmlFor="qty">Qty : </label>
            <select name="quantity" id="quantity" onChange={changeQuantity}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <button onClick={removeFromCart} className="btn remove">
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
}
