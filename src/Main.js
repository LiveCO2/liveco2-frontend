import React from "react";
import {
    Route,
    BrowserRouter
} from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import HowItWorks from "./HowItWorks";
import Buy from "./Screens/Buy/Buy";
import Sell from "./Screens/Sell/Sell";
import Faq from "./Faq/Faq";

const Main = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about-compensate" component={About}/>
            <Route path="/how-it-works" component={HowItWorks}/>
            <Route path="/compensate" component={Buy}/>
            <Route path="/enroll-trees" component={Sell}/>
            <Route path="/faq" component={Faq}/>
        </div>
        <div className="footer">
        </div>
    </BrowserRouter>
);

export default Main;
