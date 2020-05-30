import React from 'react';
import { Trans } from 'react-i18next';

import Button from '../Button';
import legoForest from '../images/lego-forest-removebg-preview.png'

import './CardWithImage.scss';
import Product from "../Product/Product";
import silverMedal from '../icons/silver-medal.svg'

const CardWithImage = () => (
  <div className="cardContainer">
      <div className="cardText">
          <h2 className="cardTitle"><Trans i18nKey="home.box1.title"/></h2>
          <p><Trans i18nKey="home.box1.text2"/></p>
          <p><Trans i18nKey="home.box1.text3"/></p>
          <Button link="compensate" tk="home.box1.button" />
      </div>
      <div className="cardImage">
            <Product 
                img={silverMedal}
                title="buy.products.product1.price" 
                desc="buy.products.product1.description"
                buttonText="buy.products.button"
            />
      </div>
  </div>
);

export default CardWithImage;
