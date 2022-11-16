import React from "react";
import { Link } from "react-router-dom";
import "./NavbarMain.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CartState } from "../Internal/Context";
import { signOut } from "firebase/auth";
import { auth } from "../Internal/firebase";
import { useStateValue } from "../StateProvider";

export default function NavbarMain() {
  // const [state, dispatch] = useStateValue();
  const [{ cart }, dispatch] = useStateValue();
  // console.log(cart);

  // const {
  //   state: { cart },
  // } = CartState();
  const {
    state: { user },
  } = CartState();

  const logIn = async (e) => {
    if (user) {
      await signOut(auth);
      alert(`User ${user?.email.split("@")[0].toUpperCase()} Signed Out`);
    }
  };

  return (
    <div>
      <div className="navbarmain">
        {/* <div className="logoOnly"></div>
      <div className="noLogo"></div> */}
        <Link to="/">
          <div className="logodiv">
            {/* <img src="./photos/amazonicon1.png" alt="" className="logo" /> */}
            <img src="photos/amazonNew.png" alt="" className="logo" />
          </div>
        </Link>
        <ul>
          <Link to="/">
            <li className="location">
              <div>
                <LocationOnOutlinedIcon
                  sx={{ fontSize: 20 }}
                  className="locationicon"
                ></LocationOnOutlinedIcon>
              </div>
              <div className="link">
                <p className="top">
                  {user ? "Deliver to" : "Hello"}{" "}
                  {user?.email.split("@")[0].toUpperCase()}
                </p>
                <span className="bottom">Select your address</span>
              </div>
            </li>
          </Link>
        </ul>
        <div className="searchbox">
          <div className="dropbox">
            <p className="all">
              All
              <select name="" id="arrow"></select>
            </p>
          </div>
          <input type="text" className="search" />
          <div className="magnify">
            <SearchIcon sx={{ fontSize: 45 }} className="s_icon" />
          </div>
        </div>
        <ul>
          {/* <Link to="/">
            <li>
              <p className="top">English</p>
            </li>
          </Link> */}
          <Link to={!user && "/login"}>
            {/* <Link to="/login"> */}
            <li className="signInDiv">
              <div className="link" onClick={logIn}>
                <p className="top">
                  Hello, {user?.email.split("@")[0].toUpperCase()}{" "}
                  <span className="sign-in-out">
                    {user ? "Sign Out" : "Sign In"}
                  </span>
                </p>
                <span className="bottom">Account & Lists</span>
              </div>
            </li>
          </Link>
          <Link to="/">
            <li className="returnOrders">
              <div className="link">
                <p className="top">Returns</p>
                <span className="bottom">& Orders</span>
              </div>
            </li>
          </Link>
          <Link to="/checkout">
            <li className="cartdiv">
              <div className="carticon">
                <span className="addtocart">{cart.length}</span>
                <ShoppingCartOutlinedIcon sx={{ fontSize: 28 }} />
              </div>
              <span className="cart bottom">Cart</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
