import React from 'react';
import { Trans } from 'react-i18next';

import "./Contact.scss"

import emailIcon from './../../icons/envelope.svg';
import whatsappIcon from './../../icons/whatsapp-logo.png';
import telegramIcon from './../../icons/telegram_logo_32px.svg';
import phoneIcon from './../../icons/phone.png';

const Contact = () => (
    <div className="contact">
        <div className="contactHeader">
            <h2><Trans i18nKey="contact.title"/></h2>
            <p className="text-big"><Trans i18nKey="contact.subtitle"/></p>
        </div>
        <div className="contactTitle">
            <h3><Trans i18nKey="contact.main.title"/></h3>
        </div>
        <div className="contactMain">
            <form className="contactForm">
                <b><p className="text-big"><Trans i18nKey="contact.form.title"/></p></b>
                <label>
                    <p><Trans i18nKey="contact.form.name"/></p>
                    <input type="text" id="fname" name="fname"/>
                </label>
                <label>
                    <p><Trans i18nKey="contact.form.last"/></p>
                    <input type="text" id="lname" name="lname"/>
                </label>
                <label>
                    <p><Trans i18nKey="contact.form.mail"/></p>
                    <input type="text" id="mail" name="mail"/>
                </label>
                <label>
                    <p><Trans i18nKey="contact.form.tel"/></p>
                    <input type="text" id="phone" name="phone"/>
                </label>
                <label>
                    <p><Trans i18nKey="contact.form.content"/></p>
                    <textarea type="text" id="content" name="content"  rows="10" cols="35"/>
                </label>
                <input type="submit" value={<Trans i18nKey="contact.form.button"/>}/>
            </form>
            <div className="contactMethods">
                <div>
                    <b><p className="text-big"><Trans i18nKey="contact.methods.whatsapp"/></p></b>
                    <img className="contactImage" src={whatsappIcon} alt="whatsappIcon" />
                </div>
                <div>
                    <b><p className="text-big"><Trans i18nKey="contact.methods.telegram"/></p></b>
                    <img className="contactImage" src={telegramIcon} alt="telegramIcon" />
                </div>
                <div>
                    <b><p className="text-big"><Trans i18nKey="contact.methods.tel"/></p></b>
                    <img className="contactImage" src={phoneIcon} alt="phoneIcon" />
                </div>
                <div>
                    <b><p className="text-big"><Trans i18nKey="contact.methods.mail"/></p></b>
                    <img className="contactImage" src={emailIcon} alt="envelopeIcon" />
                </div>
            </div>
        </div>
    </div>

);

export default Contact;
