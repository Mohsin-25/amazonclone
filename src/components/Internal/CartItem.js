import React from "react";
import { useStateValue } from "../StateProvider";
import "./CartItem.css";
import { CartState } from "./Context";

export default function CartItem(props) {
  const [{ cart }, dispatch] = useStateValue();

  // console.log(cart);

  const removeFromCart = () => {
    dispatch({
      type: "Remove_From_Cart_From_Checkout",
      id: props.id,
      // item: {
      //   id: props.id,
      // },
    });
  };

  const changeQuantity = (e) => {
    dispatch({
      type: "Change_Item_Quantity",
      item: {
        id: props.id,
        qty: e.target.value,
      },
    });
  };

  return (
    <div>
      <div className="cart-item">
        {window.innerWidth >= 830 && (
          <input
            type="checkbox"
            checked="checked"
            className="cart-item-checkbox"
          />
        )}
        <div className="cart-img-div">
          <img src={props.src} alt="" className="cart-img" />
        </div>

        <div className="cart-item-info">
          <div className="cart-item-info-left">
            {/* <h3 className="cart-item-company">{props.company}</h3> */}
            {window.innerWidth <= 1140 ? (
              <p className="cart-item-name">{props.name.slice(0, 150)}...</p>
            ) : (
              <p className="cart-item-name">{props.name}</p>
            )}
            <p style={{ color: "green", fontSize: 14, fontWeight: 400 }}>
              In stock
            </p>
            <div style={{ display: "flex" }}>
              {window.innerWidth < 660 && (
                <h3>
                  <span className="cart-item-cost"  style={{ marginRight: 20 }}>
                    <small>&#8377;</small>
                    {Number(props.cost)}.00
                  </span>
                </h3>
              )}

              {props.isPrime && (
                <h4>
                  <span
                    style={{
                      color: "orange",
                      fontWeight: 500,
                      textShadow: "1px 1px 2px red",
                    }}
                  >
                    &#10003;
                  </span>
                  <span style={{ color: "rgb(45,151,197)", fontWeight: 700 }}>
                    prime
                  </span>
                </h4>
              )}
            </div>
            <p>
              <input type="checkbox" /> This order contains a gift
            </p>
            {/* <p>
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
              <span className="cart-item-reviews">-({props.reviews})</span>
            </p> */}
            <div className="qty-div">
              <button>
                <label htmlFor="qty">Qty : </label>
                <select name="quantity" id="quantity" onChange={changeQuantity}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </button>
              <div className="cart-item-actions-div">
                <p className="cart-item-actions" onClick={removeFromCart}>
                  Delete
                </p>
                <p className="cart-item-actions">Save for later</p>
                <p className="cart-item-actions">See more like this</p>
              </div>
            </div>

            {/* <button onClick={removeFromCart} className="btn remove">
              Remove from cart
            </button> */}
          </div>
          {window.innerWidth >= 660 && (
            <div className="cart-item-info-right">
              <span className="cart-item-cost">
                <small>&#8377;</small>
                {Number(props.cost)}.00
              </span>
              {/* <span>
              {" "}
              <small>
                <strike>
                  <small>&#8377;</small>
                  {Number(props.originalCost)}
                </strike>
              </small>
            </span> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
