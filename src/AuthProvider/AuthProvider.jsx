import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

const auth= getAuth(app)

export const AuthContext =createContext(null)

const AuthProvider = ({children}) => {
    
    const [user,setUser]=useState()
    const [loding,setLoding]=useState(true)

    const register =(email,password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoding(true)
        return signOut(auth)
    }

    const signIN =(email,password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoding(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])
    const userData={register,user,logOut,signIN}

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;