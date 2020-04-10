import React from "react";
import { NavLink} from "react-router-dom";
import { Trans } from 'react-i18next';

const Header = () => (
    <div id="Header">
        <div className="header">
            <div className="header-left">
                <NavLink className="header-link" exact to="/"><Trans i18nKey="header.home"/></NavLink>
                <NavLink className="header-link" to="/how-it-works"><Trans i18nKey="header.how-it-works"/></NavLink>
                <NavLink className="header-link" to="/compensate"><Trans i18nKey="header.compensate"/></NavLink>
                <NavLink className="header-link" to="/enroll-trees"><Trans i18nKey="header.enroll-trees"/></NavLink>
                <NavLink className="header-link" to="/about-compensate"><Trans i18nKey="header.about"/></NavLink>
            </div>
            <div className="header-right">
                <NavLink className="header-link" to="/faq"><Trans i18nKey="header.faq"/></NavLink>
            </div>
        </div>
    </div>
);
export default Header;
