import { ReactNode, useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../../Context/AuthContext"
import Loader from "../Loader"
 
export default function AuthRoutes( {children} : {children: ReactNode}) {

    const {login, loading,setError} = useContext(UserContext)
    if(!loading){
        if (!login) {
            setError("Precisa efetuar login primeiro")
            return <Navigate to="/login"/>
        }
        return <> {children}</> 
    }else{
        return  <Loader/>
    }
  
}