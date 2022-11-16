import React from "react";
import { useStateValue } from "../StateProvider";
import "./ProductCard.css";

export default function ProductCard(props) {
  const [{ cart }, dispatch] = useStateValue();

  const add = () => {
    dispatch({
      type: "Add_To_Cart",
      item: {
        id: props.id,
        src: props.src,
        name: props.name,
        rating: props.rating,
        reviews: props.reviews,
        isDealOfTheDay: props.isDealOfTheDay,
        cost: props.cost,
        originalCost: props.originalCost,
        discount: props.discount,
        isPrime: props.isPrime,
        isFreeDelivery: props.isFreeDelivery,
        isAmazonsChoice: props.isAmazonsChoice,
        isBestSeller: props.isBestSeller,
      },
    });
  };

  const remove = () => {
    dispatch({
      type: "Remove_From_Cart",
      // id: props.id,
      item: {
        id: props.id,
      },
    });
  };

  return (
    <div className="productCard">
      {props.isAmazonsChoice && (
        <p className="amazonsChoice">
          Amazon's <span style={{ color: "orange" }}>Choice</span>{" "}
        </p>
      )}
      {props.isBestSeller && <p className="bestSeller">Best seller</p>}
      <div className="productCardImageDiv">
        <img src={props.src} alt="" />
      </div>
      <div className="productCardInfo">
        {/* {props.company && (
          <h2 style={{ margin: " 0px auto" }}>{props.company}</h2>
        )} */}
        <h3 className="productCardName">{props.name.slice(0, 80)}...</h3>
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
              return (
                <span className="stars" key={index}>
                  &#9734;
                </span>
              );
            })}
          <span>&nbsp;&nbsp;{props.reviews}</span>
        </p>
        {props.isDealOfTheDay && (
          <p className="dealOfTheDay">Deal of the Day</p>
        )}
        <div
          style={{
            display: "flex",
            // justifyContent: "space-around",
            alignItems: "flex-end",
          }}
        >
          <h1>
            <small>
              <small>
                <sup>&#8377;</sup>
              </small>
            </small>
            {props.cost}&nbsp;
          </h1>
          <p>
            <strike>&#8377;{props.originalCost}</strike>&nbsp;&nbsp;
          </p>
          {props.discount && <p>({props.discount}% off)</p>}
        </div>

        {props.isPrime && (
          <h4>
            <span
              style={{
                color: "orange",
                fontWeight: 900,
                textShadow: "1px 1px 2px red",
              }}
            >
              &#10003;
            </span>
            <span style={{ color: "rgb(45,151,197)", fontWeight: 900 }}>
              prime
            </span>
          </h4>
        )}
        {props.isFreeDelivery && <p className="free">FREE Delivery by Amazon</p>}
        <div className="buttonDiv">
          {cart.some((prod) => prod.id === props.id) ? (
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
