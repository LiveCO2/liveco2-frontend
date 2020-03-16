import React, { Component } from "react";
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
import WhoWeAre from "./WhoWeAre";
import Contact from "./Contact";

const Main = () => (
      <BrowserRouter>
        <div>
          <h1>Buy CO2 absortion rights with us.</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about-compensate">About compensate</NavLink></li>
            <li><NavLink to="/how-it-works">How it works</NavLink></li>
            <li><NavLink to="/compensate">I want to compensate my CO2 expent</NavLink></li>
            <li><NavLink to="/enroll-trees">I have trees and would like to enroll them</NavLink></li>
            <li><NavLink to="/who-we-are">Who we are</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
          <div className="content">
            <Route exact to="/" component={Home}/>
            <Route path="/about-compensate" component={About}/>
            <Route path="/how-it-works" component={HowItWorks}/>
            <Route path="/compensate" component={Buy}/>
            <Route path="/enroll-trees" component={Sell}/>
            <Route path="/who-we-are" component={WhoWeAre}/>
            <Route path="/contact" component={Contact}/>
          </div>
      </BrowserRouter>
);

export default Main;
