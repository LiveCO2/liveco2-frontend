import React from "react";
import { Trans } from 'react-i18next';
import instagramIcon from './../icons/instagram.svg';
import facebookIcon from './../icons/facebook.svg';
import emailIcon from './../icons/envelope.svg';
import githubIcon from './../icons/github-32px.png';
import './Footer.scss';

const Footer = () => (
    <div className="footer">
        <div className="footer-social">
            <a href="https://instagram.com/theco2fight?igshid=1bgtikum9cr66" target="_blank" rel="noopener noreferrer">
                <img className="social-link" src={instagramIcon} alt="instagramIcon" />
            </a>
            <img className="social-link" src={facebookIcon} alt="facebookIcon" />
            <img className="social-link" src={emailIcon} alt="envelopeIcon" />
            <img className="social-link" src={githubIcon} alt="githubIcon" />
        </div>
        <div className="footer-main">
            <div className="footer-main-element">
                <p><b><Trans i18nKey="footer.main.section1.title"/></b></p>
                <p className="text-small"><a href="/project"><Trans i18nKey="footer.main.section1.item1"/></a></p>
                <p className="text-small"><Trans i18nKey="footer.main.section1.item2"/></p>
                <p className="text-small"><Trans i18nKey="footer.main.section1.item3"/></p>
            </div>
            <div className="footer-main-element">
                <p><b><Trans i18nKey="footer.main.section2.title"/></b></p>
                <p className="text-small"><a href="/compensate"><Trans i18nKey="footer.main.section2.item1"/></a></p>
                <p className="text-small"><a href="/enroll-trees"><Trans i18nKey="footer.main.section2.item2"/></a></p>
                <p className="text-small"><a href="/contact"><Trans i18nKey="footer.main.section2.item3"/></a></p>
            </div>
            <div className="footer-main-element">
                <p><b><Trans i18nKey="footer.main.section3.title"/></b></p>
                <p className="text-small"><Trans i18nKey="footer.main.section3.item1"/></p>
                <p className="text-small"><Trans i18nKey="footer.main.section3.item2"/></p>
                <p className="text-small"><Trans i18nKey="footer.main.section3.item3"/></p>
            </div>
        </div>
        <div className="footer-end">
            <p className="text-tiny">Calle San Vicente numero 101, 46001, Valencia, Espana.</p>
            <p className="text-tiny">The CO2 Fight es una marca registrada.</p>
        </div>
    </div>
);

export default Footer;

