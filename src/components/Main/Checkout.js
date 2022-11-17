import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../Internal/CartItem";
import { CartState } from "../Internal/Context";
import NavbarMain from "../Navbar/NavbarMain";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";

export default function Checkout() {
  //   const {
  //     state: { cart },
  //   } = useStateValue();
  const [{ cart }, dispatch] = useStateValue();
  // console.log(cart);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cart?.reduce((amount, item) => Number(item.cost * item.qty) + amount, 0)
    );
  }, [cart]);

  return (
    <div>
      <NavbarMain />

      <div className="checkout">
        <div className="left">
          <div className="heading-div">
            {cart.length === 0 ? (
              <div>
                <h1 className="heading">Your Amazon Cart is empty</h1>
                <Link to="/">Shop today's deals</Link>
                <p>
                  {/* You have no item in your cart.  */}
                  To buy something, click "Add to cart" button around the item
                </p>
              </div>
            ) : (
              <>
                {window.innerWidth >= 660 && (
                  <div>
                    <h1 className="heading">Shopping Cart</h1>
                  </div>
                )}
                {window.innerWidth >= 660 && <span>Price</span>}
              </>
            )}
          </div>
          <div className="cart-items">
            {cart?.map((item, index) => {
              return <CartItem {...item} key={index}></CartItem>;
            })}
          </div>
          {cart.length > 0 && (
            <div className="subtotal-bottom-div">
              <p>
                Subtotal ({cart.length} items):{" "}
                <b>
                  <small>&#8377;</small>
                  {total}
                </b>
              </p>
            </div>
          )}
        </div>

        <div className="right">
          <h2 className="subtotal">
            Subtotal ({cart.length} items):{" "}
            <b>
              <small>&#8377;</small>
              {total}
            </b>
          </h2>

          <p>
            <input type="checkbox" /> This order contains a gift
          </p>
          <button className="btn add proceed">Proceed To Buy</button>
        </div>
      </div>
    </div>
  );
}
