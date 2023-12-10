import { createContext, useState } from "react";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const myContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

//   Create a new User
 const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword( auth, email, password);
 }

  const userInfo = {
    user,
    loading,
    createUser,
  };




  return ( 
    <myContext.Provider value={userInfo}>
    {children}
    </myContext.Provider>
  );
};

export default AuthProvider;
