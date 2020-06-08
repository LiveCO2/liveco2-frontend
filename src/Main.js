import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./Header";
import Home from "./Screens/Home/Home";
import Buy from "./Screens/Buy/Buy";
import Sell from "./Screens/Sell/Sell";
import Faq from "./Screens/Faq";
import Footer from "./Footer/Footer";
import Project from "./Screens/Project/Project";
import Contact from "./Screens/Contact/Contact";

const Main = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/compensate" component={Buy}/>
            <Route path="/enroll-trees" component={Sell}/>
            <Route path="/faq" component={Faq}/>
            <Route path="/project" component={Project}/>
            <Route path="/contact" component={Contact}/>
        </div>
        <Footer/>
    </BrowserRouter>
);

export default Main;
