import React from 'react';
import { Trans } from 'react-i18next';

import Button from '../Button';

import './Product.scss';

const Product = ({img, title, desc, price}) => (
  <div className="productContainer">
      <div className="productIcon">
          <img src={img} alt="Pack"></img>
      </div>
      <div className="productText">
          <h4 className="productTitle"><Trans i18nKey={title}/></h4>
          <p><Trans i18nKey={desc}/></p>
          <p><Trans i18nKey={price}/></p>
          <Button link="how-it-works" tk="home.box1.button" />
      </div>
  </div>
);

export default Product;
