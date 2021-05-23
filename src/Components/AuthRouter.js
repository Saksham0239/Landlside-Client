import {Route,Redirect} from "react-router-dom";


const AuthRouter=({...rest})=>{
    const auth=JSON.parse(localStorage.getItem("authEpics"));

    return auth && auth.token ? <Redirect to="/" />  : <Route {...rest} />
}


export default AuthRouter;