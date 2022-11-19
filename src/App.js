import NavbarMain from "./components/Navbar/NavbarMain";
import "./App.css";
import NavbarSecondary from "./components/Navbar/NavbarSecondary";
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Main/Home";
import Checkout from "./components/Main/Checkout";
import Login from "./components/Main/Login";
import { useEffect, useState } from "react";
import { CartState } from "./components/Internal/Context";
import { auth } from "./components/Internal/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Tools from "./components/Products/Tools";
import Devices from "./components/Products/Devices";
import Styles from "./components/Products/Styles";
import Household from "./components/Products/Household";
import { useStateValue } from "./components/StateProvider";
import NavbarBottom from "./components/Navbar/NavbarBottom";
import Menu from "./components/Main/Menu";

function App() {
  // const [{ user }, dispatch] = CartState();

  const [{ user }, dispatch] = useStateValue();

  // const { dispatch } = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch({
          type: "Set_User",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "Set_User",
          user: null,
        });
      }
    });
    return () => {
      // cleanup
      unsubscribe();
    };
  }, []);
  // console.log(user);

  return (
    <div className="App">
      <HashRouter basename="/amazonclone">
        <NavbarBottom></NavbarBottom>
        <Routes>
          {/* <Route path="/" element={<Home product={product} />}></Route> */}
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
          <Route path="/tools" element={<Tools></Tools>}></Route>
          <Route path="/devices" element={<Devices></Devices>}></Route>
          <Route path="/styles" element={<Styles></Styles>}></Route>
          <Route path="/household" element={<Household></Household>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
