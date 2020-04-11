import React from 'react';
import { Trans } from 'react-i18next';

import Button from '../Button';
import legoForest from '../images/lego-forest-removebg-preview.png'

import './CardWithImage.css';

const CardWithImage = () => (
  <div className="cardContainer">
      <div className="cardText">
          <h2 className="cardTitle"><Trans i18nKey="home.box1.title"/></h2>
          <p><Trans i18nKey="home.box1.text1"/></p>
          <p><Trans i18nKey="home.box1.text2"/></p>
          <p><Trans i18nKey="home.box1.text3"/></p>
          <Button link="how-it-works" tk="home.box1.button" />
      </div>
      <div className="cardImage">
          <img src={legoForest} alt="Lego Farmer"></img>
      </div>
  </div>
);

export default CardWithImage;
