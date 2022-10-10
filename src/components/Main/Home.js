import React from "react";
import "./Home.css";
import { CartState } from "../Internal/Context";
import Product from "../Internal/Product";
import NavbarMain from "../Navbar/NavbarMain";

export default function Home() {
  //   const { product } = props;
  const {
    state: { items },
  } = CartState();
  return (
    <div>
      <NavbarMain />

      <div className="home">
        <img src="./photos/background.jpg" alt="" className="home_bg" />
        <div className="homerow">
          {items?.map((items) => {
            return <Product items={items} key={items.id}></Product>;
          })}
        </div>

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
