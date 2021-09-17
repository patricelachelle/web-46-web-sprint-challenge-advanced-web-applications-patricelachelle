import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Logout from './components/Logout';
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <Link to='/logout' data-testid="logoutButton">logout</Link>
          { isLoggedIn ? <p>{localStorage.getItem("username")}</p>:<div></div>}
        </header>
        <Switch>
          <PrivateRoute exact path='/bubblepage'>
            <BubblePage />
          </PrivateRoute>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.