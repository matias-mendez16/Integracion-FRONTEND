import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function PublicRoute() {
 const {isAuthenticated, loading}= useAuth();
 if (loading){
    return <p>Cargando...</p> //crear Spinner
 }
if (isAuthenticated){
    return <Navigate to='/dasboard' replace/>
}
return <Outlet/>

}
