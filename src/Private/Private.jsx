import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({children}) => {
    const {user}=useContext(AuthContext)
    const location=useLocation()
   if(user){
    return children
   }
   return <Navigate  state={{ from: location.pathname }} to='/login'></Navigate>
};

export default Private;