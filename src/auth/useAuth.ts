import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase-config";

export const useAuth = () => {
  const [signedInUser, setSignedInUser] = useState<User | null>(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setSignedInUser(user);
    } else {
      setSignedInUser(null);
    }
  });

  function registerUser(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  function logInUser(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // setSignedInUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  function logOutUser() {
    signOut(auth)
    // .then(() => {
    //   // Sign-out successful.
    // })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });

  }

  return {
    signedInUser,
    registerUser,
    logInUser,
    logOutUser,
  };
};
