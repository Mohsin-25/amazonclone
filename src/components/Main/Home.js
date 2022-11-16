import React from "react";
import "./Home.css";
import { CartState } from "../Internal/Context";
import Product from "../Internal/Product";
import NavbarMain from "../Navbar/NavbarMain";
import Category from "./Category";
import { useStateValue } from "../StateProvider";
import NavbarBottom from "../Navbar/NavbarBottom";

export default function Home() {
  //   const { product } = props;
  const [{ cart }, dispatch] = useStateValue();

  // const {
  //   state: { items },
  // } = CartState();
  return (
    <div>
      <NavbarMain />
      {/* <NavbarBottom></NavbarBottom> */}

      <div className="home">
        <img
          // src="https://m.media-amazon.com/images/I/71DVGxFLGXL._SX3000_.jpg"
          // src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
          // src="https://m.media-amazon.com/images/I/6187ax4ggIL._SX3000_.jpg"
          // src="https://m.media-amazon.com/images/I/611A26v15aL._SX3000_.jpg"
          // src="https://m.media-amazon.com/images/I/61UrRx+3LLL._SX3000_.jpg"
          // src="https://m.media-amazon.com/images/I/71cp9PVuTfL._SX3000_.jpg"
          // src="https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png"
          // src="https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png"
          src="https://m.media-amazon.com/images/I/61l4i7aoY2L._SX3000_.jpg"
          alt=""
          className="home_bg"
        />
        <Category></Category>
        {/*  <div className="homerow">
          {items?.map((items) => {
            return <Product items={items} key={items.id}></Product>;
          })}
        </div> */}

        {/* <div className="homerow">
        {product.map((product) => {
          <Product key={product.id} product={product}></Product>;
        })}
      </div> */}
        {/* <div className="homerow">
        <Product
          key={Math.floor(Math.random() * 9999)}
          title="Electric Grinder"
          price={1499}
          rating={5}
          image="./photos//Tools1x._SY116_CB424026090_.jpg"
        />
        <Product
          key={Math.floor(Math.random() * 9999)}
          title="Electric Grinder"
          price={1499}
          rating={5}
          image="./photos//Tools1x._SY116_CB424026090_.jpg"
        />
        <Product
          key={Math.floor(Math.random() * 9999)}
          title="Electric Grinder"
          price={1499}
          rating={5}
          image="./photos//Tools1x._SY116_CB424026090_.jpg"
        />
      </div>
      <div className="homerow">
        <Product
          key={Math.floor(Math.random() * 9999)}
          title="Electric Grinder"
          price={1499}
          rating={5}
          image="./photos//Tools1x._SY116_CB424026090_.jpg"
        />
      </div>
      <div className="homerow">
        <Product
          key={Math.floor(Math.random() * 9999)}
          title="Electric Grinder"
          price={1499}
          rating={5}
          image="./photos//Tools1x._SY116_CB424026090_.jpg"
        />
        <Product
          key={Math.floor(Math.random() * 9999)}
          title="Electric Grinder"
          price={1499}
          rating={5}
          image="./photos//Tools1x._SY116_CB424026090_.jpg"
        />
      </div>
      <div className="homerow">
        <Product
          key={Math.floor(Math.random() * 9999)}
          title="Electric Grinder"
          price={1499}
          rating={5}
          image="./photos//Tools1x._SY116_CB424026090_.jpg"
        />
        <Product
          key={Math.floor(Math.random() * 9999)}
          title="Electric Grinder"
          price={1499}
          rating={5}
          image="./photos//Tools1x._SY116_CB424026090_.jpg"
        />
        <Product
          key={Math.floor(Math.random() * 9999)}
          title="Electric Grinder"
          price={1499}
          rating={5}
          image="./photos//Tools1x._SY116_CB424026090_.jpg"
        />
        <Product
          key={Math.floor(Math.random() * 9999)}
          title="Electric Grinder"
          price={1499}
          rating={5}
          image="./photos//Tools1x._SY116_CB424026090_.jpg"
        />
      </div> */}
      </div>
    </div>
  );
}
