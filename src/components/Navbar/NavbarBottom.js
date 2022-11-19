import React from "react";
import "./NavbarBottom.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

export default function NavbarBottom() {
  const [{ cart }, dispatch] = useStateValue();

  const active = () => {
    // const icon = document.querySelectorAll(".navBottomIcon");
    // icon.forEach((element) => {
    //   element.classList.toggle("borderTop");
    // });
  };
  return (
    <>
      {window.innerWidth <= 600 && (
        <div className="navbarBottom">
          <Link to="/" style={{ color: "black" }}>
            <HomeOutlinedIcon
              sx={{ fontSize: 28 }}
              className="navBottomIcon"
              onClick={active}
            ></HomeOutlinedIcon>
          </Link>
          <Link to="/login" style={{ color: "black" }}>
            <PersonOutlineOutlinedIcon
              sx={{ fontSize: 28 }}
              className="navBottomIcon"
              onClick={active}
            ></PersonOutlineOutlinedIcon>
          </Link>
          <Link to="/checkout" style={{ color: "black" }}>
            <div style={{ position: "relative" }}>
              <AddShoppingCartOutlinedIcon
                sx={{ fontSize: 28 }}
                className="navBottomIcon"
                onClick={active}
              ></AddShoppingCartOutlinedIcon>
              <p
                className={cart.length < 10 ? "cartLengthL10" : "cartLengthM10"}
              >
                {cart.length}
              </p>
              <div className="cover"></div>
            </div>
          </Link>
          <Link to="/menu" style={{ color: "black" }}>
            <MenuOutlinedIcon
              sx={{ fontSize: 28 }}
              className="navBottomIcon"
              onClick={active}
            ></MenuOutlinedIcon>
          </Link>
        </div>
      )}
    </>
  );
}
