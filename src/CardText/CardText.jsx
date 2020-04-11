import React from 'react';
import { Trans } from 'react-i18next';

import Button from '../Button';
import legoForest from '../images/lego-forest-removebg-preview.png'

import './CardText.scss';

const CardText = () => (
  <div className="cardTextContainer">
      <h2 className="cardTitle"><Trans i18nKey="home.box2.title"/></h2>
      <p><Trans i18nKey="home.box2.text1"/></p>
      <p><Trans i18nKey="home.box2.text2"/></p>
      <p><Trans i18nKey="home.box2.text3"/></p>
      <p><Trans i18nKey="home.box2.text4"/></p>
  </div>
);

export default CardText;
