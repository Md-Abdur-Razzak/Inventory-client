import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import PublicApi from "../Hook/PublicApi";




export const MyContext = createContext(null);
const AuthProvider = ({ children }) => {

  const axPublic = PublicApi()

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
  const googleAthntocation = () =>{
             setLoder(true)
            const provider = new GoogleAuthProvider()
            return signInWithPopup(auth,provider)
         }
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      const display_url = user?.photoURL
      const name = user?.displayName
      const email = user?.email
    
      setCurrentUser(user);
      if (user) {
        axPublic.post('/jwt',{email})
        .then(res=>{
         
          const token = res?.data?.token
          if (token) {
                 localStorage.setItem("token",token)
          }
     
         
        })
      }
      else{
        localStorage.removeItem("token")
      }
      const userInfo = { name, display_url, email };

      axPublic.post("/user", userInfo)
      .then(res=>{})
     
      
      setLoder(false)
    });
    return () => {
      unsubcribe();
    };
  }, [axPublic]);

  
  const logOutUser = () => {
    return signOut(auth);
  };


  const passingDataAuth = {
    creatEmilAndPassword,
    singWithEmailAndPassword,
    user,
    logOutUser,
    loder,
    googleAthntocation
  };
  return (
    <MyContext.Provider value={passingDataAuth}>{children}</MyContext.Provider>
  );
};

export default AuthProvider;
