import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({children}) => {
    const {user,loding}=useContext(AuthContext)
    const location=useLocation()

    if(loding){
       return <div>loding</div>
    }
    return user ? (
		<div>{children}</div>
	) : (
        <Navigate  state={{ from: location.pathname }} to='/login'></Navigate>
	)

};

export default Private;