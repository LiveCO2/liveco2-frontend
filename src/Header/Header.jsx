import React from "react";
import { NavLink} from "react-router-dom";
import { Trans } from 'react-i18next';
import userIcon from './../icons/user.svg';
import './Header.scss';

const Header = () => (
    <div className="header">
        <div className="header-left">
            <NavLink className="header-link" exact to="/"><Trans i18nKey="header.home"/></NavLink>
            <NavLink className="header-link" to="/compensate"><Trans i18nKey="header.compensate"/></NavLink>
            <NavLink className="header-link" to="/enroll-trees"><Trans i18nKey="header.enroll-trees"/></NavLink>
            <NavLink className="header-link" to="/faq"><Trans i18nKey="header.faq"/></NavLink>
        </div>
        <div className="header-right">
          <div className="userDropdown">
              <img className="social-link" src={userIcon} alt="userIcon" />
              <div className="userDropdownContent">
                  <p>Cuenta</p>
                  <p>Perfil</p>
                  <p>Logout</p>
              </div>
          </div>
        </div>
    </div>
);

export default Header;
