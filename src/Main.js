import React from "react";
import {
    Route,
    NavLink,
    BrowserRouter
} from "react-router-dom";
import { Trans } from 'react-i18next';


import Home from "./Home";
import About from "./About";
import HowItWorks from "./HowItWorks";
import Buy from "./Buy";
import Sell from "./Sell";

const Main = () => (
    <BrowserRouter>
        <div id="mainHeader">
            <ul className="header">
                <li><NavLink exact to="/"><Trans i18nKey="header.home"/></NavLink></li>
                <li><NavLink to="/how-it-works"><Trans i18nKey="header.how-it-works"/></NavLink></li>
                <li><NavLink to="/compensate"><Trans i18nKey="header.compensate"/></NavLink></li>
                <li><NavLink to="/enroll-trees"><Trans i18nKey="header.enroll-trees"/></NavLink></li>
                <li><NavLink to="/faq"><Trans i18nKey="header.faq"/></NavLink></li>
                <li><NavLink to="/about-compensate"><Trans i18nKey="header.about"/></NavLink></li>
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
