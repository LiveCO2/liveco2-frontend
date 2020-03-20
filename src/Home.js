import React from 'react';
import { Trans } from 'react-i18next';

import legoFarmer from './images/farmer-lego-with-plants.jpeg'
import legoForest from './images/lego-forest.jpg'

const Home = () => (
    <div>
        <div className="containerRowCards">
            <div className="rowCard">
                <h2><Trans i18nKey="home.card1.title"/></h2>
                <ul>
                    <li>
                        <p><Trans i18nKey="home.card1.item1.amount"/>
                            <Trans i18nKey="home.card1.item1.concept"/></p>
                    </li>
                    <li>
                        <p><Trans i18nKey="home.card1.item2.amount"/>
                            <Trans i18nKey="home.card1.item2.concept"/></p>
                    </li>
                    <li>
                        <p><Trans i18nKey="home.card1.item3.amount"/>
                            <Trans i18nKey="home.card1.item3.concept"/></p>
                    </li>
                </ul>
            </div>
            <div className="rowCard">
                <h2><Trans i18nKey="home.card2.title"/></h2>
                <ul>
                    <li>
                        <p><Trans i18nKey="home.card2.item1.amount"/>
                            <Trans i18nKey="home.card2.item1.concept"/></p>
                    </li>
                    <li>
                        <p><Trans i18nKey="home.card2.item2.amount"/>
                            <Trans i18nKey="home.card2.item2.concept"/></p>
                    </li>
                    <li>
                        <p><Trans i18nKey="home.card2.item3.amount"/>
                            <Trans i18nKey="home.card2.item3.concept"/></p>
                    </li>
                </ul>
            </div>
            <div className="rowCard">
                <h2><Trans i18nKey="home.card2.title"/></h2>
                <ul>
                    <li>
                        <p><Trans i18nKey="home.card2.item1.amount"/>
                            <Trans i18nKey="home.card2.item1.concept"/></p>
                    </li>
                    <li>
                        <p><Trans i18nKey="home.card2.item2.amount"/>
                            <Trans i18nKey="home.card2.item2.concept"/></p>
                    </li>
                    <li>
                        <p><Trans i18nKey="home.card2.item3.amount"/>
                            <Trans i18nKey="home.card2.item3.concept"/></p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="containerRow">
            <div className="containerRowElement">
                <h2><Trans i18nKey="home.box1.title"/></h2>
                <p><Trans i18nKey="home.box1.text1"/></p>
                <p><Trans i18nKey="home.box1.text2"/></p>
                <p><Trans i18nKey="home.box1.text3"/></p>
            </div>
            <div className="containerRowElement">
                <img src={legoForest} alt="Lego Farmer" width="75%" className="image"></img>
            </div>
        </div>

        <div className="containerRowFlexRightText">
            <div className="rowFlexElement">
                <img src={legoFarmer} alt="Lego Farmer" width="75%" className="image"></img>
            </div>
            <div className="rowFlexElementRightText">
                <h2><Trans i18nKey="home.box2.title"/></h2>
                <p><Trans i18nKey="home.box2.text1"/></p>
            </div>
        </div>

        <div className="containerRow">
            <div>
                <h2><Trans i18nKey="home.box3.title"/></h2>
                <p><Trans i18nKey="home.box3.text1"/></p>
            </div>
        </div>

        <div className="containerRowFlexLeftText">
            <div className="rowFlexElementLeftText">
                <h2><Trans i18nKey="home.box2.title"/></h2>
                <p><Trans i18nKey="home.box2.text1"/></p>
            </div>
            <div className="rowFlexElementLeftText">
                <h2><Trans i18nKey="home.box2.title"/></h2>
                <p><Trans i18nKey="home.box2.text1"/></p>
            </div>
        </div>
    </div>
);

export default Home;
