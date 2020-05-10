import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Buy from "./Screens/Buy/Buy";
import Sell from "./Screens/Sell/Sell";
import Faq from "./Screens/Faq";

const Main = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/compensate" component={Buy}/>
            <Route path="/enroll-trees" component={Sell}/>
            <Route path="/faq" component={Faq}/>
        </div>
        <div className="footer">
        </div>
    </BrowserRouter>
);

export default Main;
