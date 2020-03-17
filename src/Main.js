import React from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";


import Home from "./Home";
import About from "./About";
import HowItWorks from "./HowItWorks";
import Buy from "./Buy";
import Sell from "./Sell";

const Main = () => (
      <BrowserRouter>
        <div id="mainHeader">
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/how-it-works">How it works</NavLink></li>
            <li><NavLink to="/compensate">Compensate your CO2</NavLink></li>
            <li><NavLink to="/enroll-trees">I'm a farmer</NavLink></li>
            <li><NavLink to="/about-compensate">About compensate</NavLink></li>
          </ul>
        </div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about-compensate" component={About}/>
            <Route path="/how-it-works" component={HowItWorks}/>
            <Route path="/compensate" component={Buy}/>
            <Route path="/enroll-trees" component={Sell}/>
          </div>
      </BrowserRouter>
);

export default Main;
