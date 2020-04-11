import React from 'react';
import { Trans } from 'react-i18next';

import Button from './Button';
import CardWithImage from './CardWithImage';
import CardText from './CardText';

import legoFarmer from './images/farmer-lego-with-plants.jpeg'
import iconCarrot from './icons/carrot.svg'
import iconSolarPanel from './icons/045-solar-panel.svg'
import iconElectricCar from './icons/010-electric-car.svg'
import iconTree1 from './icons/tree-1.svg'
import iconTree2 from './icons/tree-2.svg'
import iconTree3 from './icons/tree-3.svg'

const Home = () => (
    <div>
        <div className="mainRow">
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
                <Button link="compensate" tk="home.card1.button" />
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
                <Button link="how-it-works" tk="home.card2.button" />
            </div>
        </div>
        <CardWithImage />
        <div className="rowContainer">
          <div className="row">
              <div className="rowCardImage">
                  <img src={legoFarmer} alt="Lego Farmer" width="75%" className="image"></img>
              </div>
              <CardText />
          </div>
          <div className="row">
            <CardText />
          </div>
        </div>
    </div>
);

export default Home;
