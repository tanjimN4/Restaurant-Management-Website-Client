import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import axios from "axios";

const auth= getAuth(app)

export const AuthContext =createContext()

const AuthProvider = ({children}) => {
    
    const [user,setUser]=useState(null)
    const [loding,setLoding]=useState(true)

    const register =(email,password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    const signIN =(email,password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInPop=(provider)=>{
        setLoding(true)
        return signInWithPopup(auth,provider)
    }

    useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser)
            const userInfo = { email: currentUser?.email }

			if (currentUser) {
				

				axios
					.post('http://localhost:5000/jwt', userInfo, {
						withCredentials: true,
					})
					.then((res) => {
						console.log('token respons', res.data)
					})
			} else {
				axios
					.post('http://localhost:5000/logout', userInfo, {
						withCredentials: true,
					})
					.then((res) => {
						console.log(res.data)
					})
			}

			setLoding(false)
		})
		return () => {
			return unsubscribe()
		}
	}, [])
    const userData={register,user,logOut,signIN,signInPop,loding}

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;