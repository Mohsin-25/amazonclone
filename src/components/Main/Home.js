import React from "react";
import "./Home.css";
import { CartState } from "../Internal/Context";
import Product from "../Internal/Product";
import NavbarMain from "../Navbar/NavbarMain";
import Category from "./Category";
import { useStateValue } from "../StateProvider";
import NavbarBottom from "../Navbar/NavbarBottom";
import NavScroll from "../Navbar/NavScroll";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect } from "react";

export default function Home() {
  //   const { product } = props;
  const [{ cart }, dispatch] = useStateValue();

  const img = document.querySelectorAll(".home_bg");
  let sliderFirst = 0;
  let sliderLast = (img.length - 1) * 100;
  const slideLeft = () => {
    if (sliderFirst < 0) {
      sliderFirst = sliderFirst + 100;
    }
    img.forEach((pic) => {
      pic.style.transform = `translateX(${sliderFirst}%)`;
    });
  };

  const slideRight = () => {
    if (sliderFirst >= -sliderLast + 100) {
      sliderFirst = sliderFirst - 100;
    }
    img.forEach((pic) => {
      pic.style.transform = `translateX(${sliderFirst}%)`;
    });
  };

  const autoSlider = () => {
    if (sliderFirst >= -sliderLast + 100) {
      slideRight();
    } else {
      sliderFirst = 100;
    }
  };
  setInterval(autoSlider, 1800);
  return (
    <div>
      <NavbarMain />
      {window.innerWidth <= 480 && <NavScroll></NavScroll>}
      <div className="home">
        <div className="imgSlider">
          <img
            src="https://m.media-amazon.com/images/I/61l4i7aoY2L._SX3000_.jpg"
            alt=""
            className="home_bg"
          />
          <img
            src="https://m.media-amazon.com/images/I/71DVGxFLGXL._SX3000_.jpg"
            alt=""
            className="home_bg"
          />
          <img
            src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
            alt=""
            className="home_bg"
          />
          <img
            src="https://m.media-amazon.com/images/I/6187ax4ggIL._SX3000_.jpg"
            alt=""
            className="home_bg"
          />
          <img
            src="https://m.media-amazon.com/images/I/611A26v15aL._SX3000_.jpg"
            alt=""
            className="home_bg"
          />
          <img
            src="https://m.media-amazon.com/images/I/61UrRx+3LLL._SX3000_.jpg"
            alt=""
            className="home_bg"
          />
          <img
            src="https://m.media-amazon.com/images/I/71cp9PVuTfL._SX3000_.jpg"
            alt=""
            className="home_bg"
          />
          <img
            src="https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png"
            alt=""
            className="home_bg"
          />
          {window.innerWidth > 480 && (
            <>
              <ArrowBackIosIcon
                sx={{ fontSize: 35 }}
                className="arrow leftArrow"
                onClick={slideLeft}
              ></ArrowBackIosIcon>
              <ArrowForwardIosIcon
                sx={{ fontSize: 35 }}
                className="arrow rightArrow"
                onClick={slideRight}
              ></ArrowForwardIosIcon>
            </>
          )}
        </div>
        <div className="categoryDiv">
          <Category></Category>
        </div>
      </div>
    </div>
  );
}
