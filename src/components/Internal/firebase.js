// import firebase from "firebase";

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyBcuNICFJ3E28tZFgIM8gEevNlqoA4mTBQ",
//   authDomain: "clone-3c457.firebaseapp.com",
//   projectId: "clone-3c457",
//   storageBucket: "clone-3c457.appspot.com",
//   messagingSenderId: "59574584877",
//   appId: "1:59574584877:web:0fcff9344f570e1e3b5aa4",
//   measurementId: "G-2ESLWM592P",
// });
// // const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

// // export { db, auth };
// export { auth };

//

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBcuNICFJ3E28tZFgIM8gEevNlqoA4mTBQ",
  authDomain: "clone-3c457.firebaseapp.com",
  projectId: "clone-3c457",
  storageBucket: "clone-3c457.appspot.com",
  messagingSenderId: "59574584877",
  appId: "1:59574584877:web:0fcff9344f570e1e3b5aa4",
  measurementId: "G-2ESLWM592P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
