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

export default function Login() {
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
  //   const signIn = (e) => {
  //     e.preventDefault();
  //     auth
  //       .signInWithEmailAndPassword(auth, email, password)
  //       .then((auth) => {
  //         // logged in, direct to home page
  //         // history.push("/");
  //         // auth = user;
  //         navigate("/");
  //         console.log("user = " + users);
  //       })
  //       .catch((e) => alert(e.message));
  //   };
  //   const register = (e) => {
  //     e.preventDefault();
  //     auth
  //       .createUserWithEmailAndPassword(auth, email, password)
  //       .then((auth) => {
  //         // create a user and log it in
  //         navigate("/");
  //       })
  //       .catch((e) => alert(e.message));
  //   };
  return (
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
            <a href="/">Conditions of use</a> and <a href="/">Privacy Notice</a>
          </p>
          <hr />
          <h5>New to Amazon?</h5>
          <button className="register" onClick={register}>
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}
