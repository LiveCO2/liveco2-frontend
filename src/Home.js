import React from 'react';
import { Trans } from 'react-i18next';

import legoFarmer from './images/farmer-lego-with-plants.jpeg'
import legoForest from './images/lego-forest-removebg-preview.png'
import iconCarrot from './icons/carrot.svg'
import iconSolarPanel from './icons/045-solar-panel.svg'
import iconElectricCar from './icons/010-electric-car.svg'
import iconTree1 from './icons/tree-1.svg'
import iconTree2 from './icons/tree-2.svg'
import iconTree3 from './icons/tree-3.svg'

const Home = () => (
    <div>
        <div className="containerRowCards">
            <div className="card">
                <h2 className="cardTitle"><Trans i18nKey="home.card1.title"/></h2>

                <div className="cardListItem">
                    <img src={iconCarrot} alt="An orange carrot" width="12%" className="icon"></img>
                    <p className="cardListItemAmount"><Trans i18nKey="home.card1.item1.amount"/></p>
                    <p className="cardListItemText"><Trans i18nKey="home.card1.item1.concept"/></p>
                </div>
                <div className="cardListItem">
                    <img src={iconSolarPanel} alt="A solar panel" width="12%" className="icon"></img>
                    <p className="cardListItemAmount"><Trans i18nKey="home.card1.item2.amount"/></p>
                    <p className="cardListItemText"><Trans i18nKey="home.card1.item2.concept"/></p>
                </div>
                <div className="cardListItem">
                    <img src={iconElectricCar} alt="An electric car" width="12%" className="icon"></img>
                    <p className="cardListItemAmount"><Trans i18nKey="home.card1.item3.amount"/></p>
                    <p className="cardListItemText"><Trans i18nKey="home.card1.item3.concept"/></p>
                </div>
                <div className="button">
                    <a href="compensate" className="button"><Trans i18nKey="home.card1.button"/></a>
                </div>
            </div>
            <div className="card">
                <h2 className="cardTitle"><Trans i18nKey="home.card2.title"/></h2>

                <div className="cardListItem">
                    <img src={iconTree1} alt="A tree" width="12%" className="icon"></img>
                    <p className="cardListItemAmount"><Trans i18nKey="home.card2.item1.amount"/></p>
                    <p className="cardListItemText"><Trans i18nKey="home.card2.item1.concept"/></p>
                </div>
                <div className="cardListItem">
                    <img src={iconTree2} alt="A tree" width="12%" className="icon"></img>
                    <p className="cardListItemAmount"><Trans i18nKey="home.card2.item2.amount"/></p>
                    <p className="cardListItemText"><Trans i18nKey="home.card2.item2.concept"/></p>
                </div>
                <div className="cardListItem">
                    <img src={iconTree3} alt="A tree" width="12%" className="icon"></img>
                    <p className="cardListItemAmount"><Trans i18nKey="home.card2.item3.amount"/></p>
                    <p className="cardListItemText"><Trans i18nKey="home.card2.item3.concept"/></p>
                </div>
                <div className="button">
                    <a href="how-it-works" className="button"><Trans i18nKey="home.card2.button"/></a>
                </div>
            </div>
        </div>

        <div className="containerRow">
            <div className="containerRowElement">
                <h2><Trans i18nKey="home.box1.title"/></h2>
                <p><Trans i18nKey="home.box1.text1"/></p>
                <p><Trans i18nKey="home.box1.text2"/></p>
                <p><Trans i18nKey="home.box1.text3"/></p>
                <a href="how-it-works" className="button"><Trans i18nKey="home.box1.button"/></a>
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
                <p><Trans i18nKey="home.box2.text2"/></p>
                <p><Trans i18nKey="home.box2.text3"/></p>
                <p><Trans i18nKey="home.box2.text4"/></p>
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
