import React from "react";
import "./NavbarSecondary.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export default function NavbarSecondary() {
  return (
    <div>
      <div className="navbarsecondary">
        <ul>
          <a href="#">
            <li className="menu">
              <MenuOutlinedIcon
                sx={{ fontSize: 20 }}
                className="menuicon"
              ></MenuOutlinedIcon>
              <h5 className="all">All</h5>
            </li>
          </a>
          <a href="#">
            <li>
              <h5>Sell</h5>
            </li>
          </a>
          <a href="#">
            <li>
              <h5>Best Sellers</h5>
            </li>
          </a>
          <a href="#">
            <li>
              <h5>Mobiles</h5>
            </li>
          </a>
          <a href="#">
            <li>
              <h5>Today's Deals</h5>
            </li>
          </a>
          <a href="#">
            <li>
              <h5>Customer Service</h5>
            </li>
          </a>
          <a href="#">
            <li>
              <h5>Books</h5>
            </li>
          </a>
          <a href="#">
            <li>
              <h5>Electronics</h5>
            </li>
          </a>
          <a href="#">
            <li>
              <h5>Fashion</h5>
            </li>
          </a>
          <a href="#">
            <li>
              <h5>Prime</h5>
            </li>
          </a>
          <a href="#">
            <li>
              <h5>New Releases</h5>
            </li>
          </a>
          <a href="#">
            <li>
              <h5>Home & Kitchen</h5>
            </li>
          </a>
          <a href="#">
            <li>
              <h5>Amazon Pay</h5>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
