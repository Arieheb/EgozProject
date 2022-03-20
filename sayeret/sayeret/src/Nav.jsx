import {About} from "./pages/about/About";
import {Home} from "./pages/home/Home";
import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


export function Nav(){
    return (
   
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="About">About</Link>
          </li>
        </ul>
        
     <Router>
      <Route>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
        </Route>
      </Route>
      
    </Router>
    </div>
    );
}