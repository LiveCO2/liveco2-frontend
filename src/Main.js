import React from "react";
import {
    Route,
    NavLink,
    BrowserRouter
} from "react-router-dom";
import { Trans } from 'react-i18next';

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import HowItWorks from "./HowItWorks";
import Buy from "./Buy";
import Sell from "./Sell";

const Main = () => (
    <BrowserRouter>
        <Header/>
        <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about-compensate" component={About}/>
            <Route path="/how-it-works" component={HowItWorks}/>
            <Route path="/compensate" component={Buy}/>
            <Route path="/enroll-trees" component={Sell}/>
        </div>
        <div className="footer">
        </div>
    </BrowserRouter>
);

export default Main;
