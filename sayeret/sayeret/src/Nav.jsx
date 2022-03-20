import {About} from "./pages/about/About";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


export function Nav(){
    return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="About">About</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="about">
            <About/>
          </Route>
        </Switch>
      </div>
    </Router>
      
    );
}