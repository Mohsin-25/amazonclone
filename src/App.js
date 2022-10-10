import NavbarMain from "./components/Navbar/NavbarMain";
import "./App.css";
import NavbarSecondary from "./components/Navbar/NavbarSecondary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Main/Home";
import Checkout from "./components/Main/Checkout";
import Login from "./components/Main/Login";
import { useEffect, useState } from "react";
import { CartState } from "./components/Internal/Context";
import { auth } from "./components/Internal/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  // const [{ user }, dispatch] = CartState();
  const {
    state: { user },
    dispatch,
  } = CartState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
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
      <Router>
        {/* <NavbarMain /> */}

        {/* <NavbarSecondary /> */}
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/checkout"
            element={
              <Checkout>
                {/* <NavbarMain style={{display:"none"}} /> */}
                {/* <NavbarMain /> */}
              </Checkout>
            }
          ></Route>
          {/* <Route path="/" element={<Home product={product} />}></Route> */}

          <Route
            path="/"
            element={
              <Home>
                <NavbarMain style="display:none" />
              </Home>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
