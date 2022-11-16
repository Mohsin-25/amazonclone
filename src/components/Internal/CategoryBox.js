import React from "react";
import { Link } from "react-router-dom";
import "./CategoryBox.css";
import { category } from "./CategoryBoxItems";

export default function CategoryBox(props) {
  return (
    <div className="categoryBox">
      <div>
        <h2>{props.title}</h2>
        <div className="categoryBox-imgBox">
          {/* <Link to={props.to}> */}
          <figure>
            <img src={props.src1} />
            <figcaption>{props.alt1}</figcaption>
          </figure>
          {/* </Link> */}
          <figure>
            <img src={props.src2} />
            <figcaption>{props.alt2}</figcaption>
          </figure>
          <figure>
            <img src={props.src3} />
            <figcaption>{props.alt3}</figcaption>
          </figure>
          <figure>
            <img src={props.src4} />
            <figcaption>{props.alt4}</figcaption>
          </figure>
        </div>
        <Link
          to={props.to}
          style={{ position: "absolute", bottom: 20, left: 20 }}
          className="seeMore"
        >
          See more
        </Link>
      </div>
    </div>
  );
}
