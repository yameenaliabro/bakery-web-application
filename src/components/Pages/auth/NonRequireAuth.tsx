import { Navigate, useLocation } from "react-router-dom"
import { UserLoggedin } from "./Auth"

const NonRequirAuth = ({children} : {children : any}) => {
    const location = useLocation()
    const isloggeid = UserLoggedin()
    if(isloggeid){
        return <Navigate to="/" state={{from : location}} replace/>
    }
    return children
}
export default NonRequirAuth