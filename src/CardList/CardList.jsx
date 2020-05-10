import React from 'react';
import { Trans } from 'react-i18next';
import Button from '../Button';

import './CardList.scss';

const CardList = ({ title, list, buttonLink }) => (
  <div className="card">
    <h2 className="cardTitle"><Trans i18nKey="home.card1.title"/></h2>
    {list.map(listItem => (
      <div className="cardListItem" key={listItem.id}>
          <img src={listItem.icon} alt="An orange carrot" width="12%" className="icon"></img>
          <p className="cardListItemAmount"><Trans i18nKey={listItem.amount}/></p>
          <p className="cardListItemText"><Trans i18nKey={listItem.description}/></p>
      </div>
    ))}
    <Button link={buttonLink} tk="home.card1.button" />
  </div>
);

export default CardList;
