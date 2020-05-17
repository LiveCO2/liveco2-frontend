import React from 'react';

import certify from '../icons/certify.svg'
import measure from '../icons/measure.svg'
import market from '../icons/market.svg'

import './KeyPoints.scss';

const KeyPoints = ({ title, list, buttonLink }) => (
  <div className="keyPointsWrap">
      <img src={measure} alt="An orange carrot" height="160px" className="icon"></img>
      <img src={certify} alt="An orange carrot" height="160px" className="icon"></img>
      <img src={market} alt="An orange carrot" height="160px" className="icon"></img>
  </div>
);

export default KeyPoints;
