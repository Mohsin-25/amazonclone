import React from "react";

export default function SingleProduct(props) {
//   const { item } = props;
  console.log(props.title);
  return (
    <div>
      <h1>{props.title}</h1>
      {/* <div className="product">
        <div className="pinfo">
          <p className="ptitle">{item.title}</p>
          <p className="pprice">Rs.{item.price}</p>
          <p className="prating">
            {Array(item.rating)
              .fill()
              .map((_) => {
                return <span>&#9733;</span>;
              })}
          </p>
        </div>
        <img src={item.image} alt="" className="pimage" />
        <button className="btn">Add to Cart</button>
      </div> */}
    </div>
  );
}
