import React, { useState } from "react";
import { useEffect } from "react";
import NavbarMain from "../Navbar/NavbarMain";
import "./Menu.css";

export default function Menu() {
  const [showBox1, setShowBox1] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);
  const [showBox4, setShowBox4] = useState(false);
  const [showBox5, setShowBox5] = useState(false);
  const [showBox6, setShowBox6] = useState(false);
  const [showBox7, setShowBox7] = useState(false);
  const [showBox8, setShowBox8] = useState(false);
  const [showBox9, setShowBox9] = useState(false);

  const boxappear1 = () => {
    setShowBox1(!showBox1);
    document.querySelector(".b1").classList.add("selected");
  };
  const boxappear2 = () => {
    setShowBox2(!showBox2);
    document.querySelector(".b2").classList.add("selected");
  };
  const boxappear3 = () => {
    setShowBox3(!showBox3);
    document.querySelector(".b3").classList.add("selected");
  };
  const boxappear4 = () => {
    setShowBox4(!showBox4);
    document.querySelector(".b4").classList.add("selected");
  };
  const boxappear5 = () => {
    setShowBox5(!showBox5);
    document.querySelector(".b5").classList.add("selected");
  };
  const boxappear6 = () => {
    setShowBox6(!showBox6);
    document.querySelector(".b6").classList.add("selected");
  };
  const boxappear7 = () => {
    setShowBox7(!showBox7);
    document.querySelector(".b7").classList.add("selected");
  };
  const boxappear8 = () => {
    document.querySelector(".b8").classList.add("selected");
    setShowBox8(!showBox8);
  };
  const boxappear9 = () => {
    setShowBox9(!showBox9);
    document.querySelector(".b9").classList.add("selected");
  };

  useEffect(() => {
    let boxHide = () => {
      setShowBox1(false);
      document.querySelector(".b1").classList.remove("selected");
      setShowBox2(false);
      document.querySelector(".b2").classList.remove("selected");
      setShowBox3(false);
      document.querySelector(".b3").classList.remove("selected");
      setShowBox4(false);
      document.querySelector(".b4").classList.remove("selected");
      setShowBox5(false);
      document.querySelector(".b5").classList.remove("selected");
      setShowBox6(false);
      document.querySelector(".b6").classList.remove("selected");
      setShowBox7(false);
      document.querySelector(".b7").classList.remove("selected");
      setShowBox8(false);
      document.querySelector(".b8").classList.remove("selected");
      setShowBox9(false);
      document.querySelector(".b9").classList.remove("selected");
    };
    document.addEventListener("mousedown", boxHide);
  });

  return (
    <div>
      <NavbarMain />
      <div className="menu">
        <div className="boxtopbox">
          <div className="boxtop bt1">Amazon Pay</div>
          <div className="boxtop bt2"> Amazon miniTV</div>
        </div>
        <div className="boxbox">
          <div className="box b1" onClick={boxappear1}>
            <p>Prime</p>
            <div className="boxImgDiv">
              <img
                src="https://m.media-amazon.com/images/I/51LFZ0G5yuL._AC_UL320_.jpg"
                className="boxImg"
                alt=""
              />
            </div>
          </div>
          <div className="box b2" onClick={boxappear2}>
            <p>Deals and Savings</p>
            <div className="boxImgDiv">
              <img
                src="https://m.media-amazon.com/images/I/61NsOx4Rl6L._AC_UL320_.jpg"
                className="boxImg"
                alt=""
              />
            </div>
          </div>
          <div className="box b3" onClick={boxappear3}>
            <p>Mobiles & Electronic Devices</p>
            <div className="boxImgDiv">
              <img
                src="https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UY218_.jpg"
                className="boxImg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="contentbox">
          {showBox1 && (
            <div className="content">
              <div>Prime</div>
              <div>Prime Video</div>
              <div>Prime Reading</div>
              <div>Prime Music</div>
            </div>
          )}
          {showBox2 && (
            <div className="content">
              <div>Today's Deals</div>
              <div>Rewards</div>
              <div>Amazon Coupons</div>
              <div>Clearance Store</div>
              <div>Amazon Renewed</div>
              <div>Subscribe & Save</div>
            </div>
          )}
          {showBox3 && (
            <div className="content">
              <div>Mobile Phones & Accessories</div>
              <div>Electronics</div>
              <div>Computer & Accessories</div>
              <div>TVs and Appliances</div>
              <div>Echo and Fire TV</div>
              <div>Software</div>
              <div>Kindle E-readers</div>
              <div>Grooming & Wellness Devices</div>
              <div>Amazon Launchpad</div>
              <div>Local Shops on Amazon</div>
            </div>
          )}
        </div>
        <div className="boxbox">
          <div className="box b4" onClick={boxappear4}>
            <p>Fashion & Beauty</p>
            <div className="boxImgDiv">
              <img
                src="https://m.media-amazon.com/images/I/61dZ4dUI-rS._AC_UL320_.jpg"
                className="boxImg"
                alt=""
              />
            </div>
          </div>
          <div className="box b5" onClick={boxappear5}>
            <p>Grocerie & Pet Supplies</p>
            <div className="boxImgDiv">
              <img
                src="https://m.media-amazon.com/images/I/412TbDp8+mL._AC_UL320_.jpg"
                className="boxImg"
                alt=""
              />
            </div>
          </div>
          <div className="box b6" onClick={boxappear6}>
            <p>Health & Personal Care</p>
            <div className="boxImgDiv">
              <img
                src="https://m.media-amazon.com/images/I/7185q8MLGIL._AC_UL320_.jpg"
                className="boxImg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="contentbox">
          {showBox4 && (
            <div className="content">
              <div>Women's Fashion</div>
              <div>Men's Fashion</div>
              <div>Kid's Fashion</div>
              <div>Beauty</div>
              <div>Shoes & Footwear</div>
              <div>Watches</div>
              <div>Bags, Wallets and Luggage</div>
              <div>Handloom and Handicrafts</div>
              <div>Small and Medium Businesses</div>
              <div>Local Shops on Amazon</div>
              <div>#FoundItOnAmazon</div>
              <div>Style Feed</div>
            </div>
          )}
          {showBox5 && (
            <div className="content">
              <div>Grocery & Gourmet Food</div>
              <div>Amazon Fresh</div>
              <div>Daily Essentials</div>
              <div>Pet Supplies</div>
              <div>Subscribe & Save</div>
              <div>#FoundItOnAmazon</div>
            </div>
          )}
          {showBox6 && (
            <div className="content">
              <div>Grooming & Wellness Devices</div>
              <div>Health & Household Supplies</div>
              <div>Beauty</div>
              <div>Amazon Pharmacy</div>
              <div>Daily Essentials</div>
              <div>Subscribe & Save</div>
            </div>
          )}
        </div>
        <div className="boxbox">
          <div className="box b7" onClick={boxappear7}>
            <p>Home, Furniture & Appliances</p>
            <div className="boxImgDiv">
              <img
                src="https://m.media-amazon.com/images/I/61zhqJg1bTL._AC_UY218_.jpg"
                className="boxImg"
                alt=""
              />
            </div>
          </div>
          <div className="box b8" onClick={boxappear8}>
            <p>Music, Video and Gaming</p>
            <div className="boxImgDiv">
              <img
                src="https://m.media-amazon.com/images/I/41QwbBaOfnL._AC_UY218_.jpg"
                className="boxImg"
                alt=""
              />
            </div>
          </div>
          <div className="box b9" onClick={boxappear9}>
            <p>FunZone & Inspiration</p>
            <div className="boxImgDiv">
              <img
                src="https://m.media-amazon.com/images/I/61AM233BgcL._AC_UL640_QL65_.jpg"
                className="boxImg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="contentbox">
          {showBox7 && (
            <div className="content">
              <div>Home & Kitchen</div>
              <div>Furniture</div>
              <div>TV and Appliances</div>
              <div>Garden & Outdoors</div>
              <div>Handloom and Handicrafts</div>
              <div>Our Brands</div>
              <div>Small and Medium Business</div>
              <div>Local Shops on Amazon</div>
              <div>Health & household Supplies</div>
              <div>#FoundItOnAmazon</div>
            </div>
          )}
          {showBox8 && (
            <div className="content">
              <div>Video Games</div>
              <div>Musical Instruments</div>
              <div>Amazon miniTV</div>
              <div>Prime Video</div>
              <div>Prime Music</div>
              <div>FunZone</div>
              <div>Movie Tickets</div>
            </div>
          )}
          {showBox9 && (
            <div className="content">
              <div>Amazon Live</div>
              <div>FunZone</div>
              <div>#FoundItOnAmazon</div>
            </div>
          )}
        </div>
        {/* <div className="boxbox">
          <div className="box">Box 4</div>
          <div className="box">Box 5</div>
          <div className="box">Box 6</div>
        </div> */}
      </div>
    </div>
  );
}
