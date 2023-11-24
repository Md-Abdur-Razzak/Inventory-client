import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext } from "react";
import { auth } from "../firebase/firebase.config";

export const MyContext = createContext(null)
const AuthProvider = ({children}) => {
    const creatEmilAndPassword = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const passingDataAuth = {
        creatEmilAndPassword
    }
    return (
        <MyContext.Provider value={passingDataAuth}>
            {children}
        </MyContext.Provider>
    );
};

export default AuthProvider;