import React, { useState } from "react";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { auth } from "../Internal/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "./Login.css";
import { async } from "@firebase/util";
import { useStateValue } from "../StateProvider";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NavbarMain from "../Navbar/NavbarMain";

export default function Login() {
  const [{ user }, dispatch] = useStateValue();

  //   const history = useHistory();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    try {
      const userNew = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/");
      //   console.log(userNew);
    } catch (error) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        alert("User already exists. Try again with another email id");
      } else if (
        error.message ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)."
      ) {
        alert("Password should be at-least 6 characters");
      } else if (error.message === "Firebase: Error (auth/invalid-email).") {
        alert("Invalid email id.");
      } else {
        alert(error.message);
      }
    }
  };

  const logIn = async (e) => {
    e.preventDefault();
    try {
      const currentUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      //   console.log(currentUser);
    } catch (error) {
      if (error.message === "Firebase: Error (auth/wrong-password).") {
        alert("Incorrect password");
      } else if (error.message === "Firebase: Error (auth/user-not-found).") {
        alert("User not found, you can create new id with this email");
      } else {
        alert(error.message);
      }
    }
  };
  const logOut = async (e) => {
    await signOut(auth);
  };

  return (
    <>
      {!user ? (
        <div className="login">
          <Link to="/">
            <img src="./photos/amazonNew2.png" className="login-logo" alt="" />
          </Link>
          <div className="login-div">
            <h1>Sign-in</h1>
            <form>
              <h5>Email</h5>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
              <h5>Password</h5>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
              <button type="submit" className="sign-in" onClick={logIn}>
                Sign In
              </button>
              <p>
                By continuing, you agree to Amazon's{" "}
                <a href="/">Conditions of use</a> and{" "}
                <a href="/">Privacy Notice</a>
              </p>
              <hr />
              <h5>New to Amazon?</h5>
              <button className="register" onClick={register}>
                Create your Amazon account
              </button>
            </form>
          </div>
        </div>
      ) : window.innerWidth <= 480 ? (
        <>
          <NavbarMain></NavbarMain>
          <div className="loggedIn">
            <div className="userTop">
              <p className="greetUser">
                Hello, <span>{user?.email.split("@")[0].toUpperCase()}</span>
              </p>
              <div className="userProfile">
                <AccountCircleOutlinedIcon
                  sx={{ fontSize: 35, color: "gray" }}
                ></AccountCircleOutlinedIcon>
                <button onClick={logOut}>Logout</button>
              </div>
            </div>
            <p className="innerwidth">{window.innerWidth}</p>
            <div className="usersOptionsDiv">
              <div className="usersOptions">
                <p>Your Orders</p>
              </div>
              <div className="usersOptions">
                <p>Buy Again</p>
              </div>
              <div className="usersOptions">
                <p>Your Account</p>
              </div>
              <div className="usersOptions">
                <p>Your Wish List</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="login">
          <Link to="/">
            <img src="./photos/amazonNew2.png" className="login-logo" alt="" />
          </Link>
          <div className="login-div">
            <h1>Sign-in</h1>
            <form>
              <h5>Email</h5>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
              <h5>Password</h5>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
              <button type="submit" className="sign-in" onClick={logIn}>
                Sign In
              </button>
              <p>
                By continuing, you agree to Amazon's{" "}
                <a href="/">Conditions of use</a> and{" "}
                <a href="/">Privacy Notice</a>
              </p>
              <hr />
              <h5>New to Amazon?</h5>
              <button className="register" onClick={register}>
                Create your Amazon account
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
