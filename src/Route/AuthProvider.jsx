import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const MyContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setCurrentUser] = useState(null);
  const [loder, setLoder] = useState(true);
  const creatEmilAndPassword = (email, password) => {
    setLoder(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // userSing In
  const singWithEmailAndPassword = (email, password) => {
    setLoder(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
    //   console.log("currentUser", user);
      setCurrentUser(user);
      setLoder(false)
    });
    return () => {
      unsubcribe();
    };
  }, []);

  
  const logOutUser = () => {
    return signOut(auth);
  };


  const passingDataAuth = {
    creatEmilAndPassword,
    singWithEmailAndPassword,
    user,
    logOutUser,
    loder
  };
  return (
    <MyContext.Provider value={passingDataAuth}>{children}</MyContext.Provider>
  );
};

export default AuthProvider;
