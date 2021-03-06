// import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import ColorMaps from "./Components/ColorCodedMaps/ColorCodedMap.jsx";
import Login from "./Components/Auth/LoginForm.jsx";
import SignUp from "./Components/Auth/SignUpForm.jsx";
import Weather from "./Components/Weather/Weather.jsx";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./Components/PrivateRoute";
import AuthRoute from "./Components/AuthRouter";
import Article1 from "./Components/Articles/AboutLandSlides.jsx";
import Report from "./Components/Articles/IndianLanslides.jsx";


function App() {
  return (
    <div className="App">
                <ToastContainer />
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/signup" component={SignUp} />
            <PrivateRoute exact path="/coloredMaps" component={ColorMaps} />
            <PrivateRoute exact path="/weather" component={Weather} />
            <Route exact path="/exploreMore" component={Article1} />
            <Route exact path="/report" component={Report} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
