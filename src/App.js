import "./App.css";
import React, { useEffect, useState } from "react";

import Home from "./components/Home";
import {
  BrowserRouter,
  Switch,
  Router,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./components/Login";
import history from "./components/history.js";
import Register from "./components/Register";



function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Router history={history}>
             
         
             
              {isLogin ? 
                 <Home /> 
                 :
                <>
                  <Route exact path="/login">
                    <Login setIsLogin={setIsLogin} style={{backgroundColor:"black"}} />
                  </Route>

                  <Route exact path="/" >
                    <Redirect to="/login" />
                  </Route>
              
                </>
               } 
          </Router>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
