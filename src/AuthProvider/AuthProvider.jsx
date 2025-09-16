/* eslint-disable react-refresh/only-export-components */
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(()=>{
    onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        console.log("current User",currentUser)
        setLoading(false)
    })
  },[])
 
  const authInfo = { user,loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
