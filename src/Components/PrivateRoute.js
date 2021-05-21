import {Route,Redirect} from "react-router-dom";


const PrivateRouter=({...rest})=>{
    const auth=JSON.parse(localStorage.getItem("authEpics"));

    return auth && auth.token ? <Route {...rest} /> : <Redirect to="/login" />
}

export default PrivateRouter;