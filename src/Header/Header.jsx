import React from "react";
import { NavLink} from "react-router-dom";
import { Trans } from 'react-i18next';
import instagramIcon from './../icons/instagram.svg';
import facebookIcon from './../icons/facebook.svg';
import './Header.css';

const Header = () => (
    <div className="header">
        <div className="header-left">
            <NavLink className="header-link" exact to="/"><Trans i18nKey="header.home"/></NavLink>
            <NavLink className="header-link" to="/how-it-works"><Trans i18nKey="header.how-it-works"/></NavLink>
            <NavLink className="header-link" to="/compensate"><Trans i18nKey="header.compensate"/></NavLink>
            <NavLink className="header-link" to="/enroll-trees"><Trans i18nKey="header.enroll-trees"/></NavLink>
            <NavLink className="header-link" to="/about-compensate"><Trans i18nKey="header.about"/></NavLink>
            <NavLink className="header-link" to="/faq"><Trans i18nKey="header.faq"/></NavLink>
        </div>
        <div className="header-right">
          <a href="https://instagram.com/theco2fight?igshid=1bgtikum9cr66" target="_blank" rel="noopener noreferrer">
            <img className="social-link" src={instagramIcon} alt="instagramIcon"></img>
          </a>
          <img className="social-link" src={facebookIcon} alt="facebookIcon"></img>
        </div>
    </div>
);

export default Header;
