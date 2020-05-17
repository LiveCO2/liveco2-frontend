import React from 'react';
import { Trans } from 'react-i18next';

import certify from '../icons/certify.svg'
import measure from '../icons/measure.svg'
import market from '../icons/market.svg'

import './KeyPoints.scss';

const KeyPoints = ({ title, list, buttonLink }) => (
    <div className="keyPoints">>
        <div className="keyPointsTitle">
            <h2><Trans i18nKey="keyPoints.title"/></h2>
        </div>
        <div className="keyPointsWrap">
          <div className="keyPointElement">
              <img src={measure} alt="Measure" height="120px" className="icon"></img>
              <h3><Trans i18nKey="keyPoints.point1.title"/></h3>
              <p className="text-medium"><Trans i18nKey="keyPoints.point1.text"/></p>
          </div>
          <div className="keyPointElement">
              <img src={certify} alt="Certify" height="120px" className="icon"></img>
              <h3><Trans i18nKey="keyPoints.point2.title"/></h3>
              <p className="text-medium"><Trans i18nKey="keyPoints.point2.text"/></p>
          </div>
          <div className="keyPointElement">
              <img src={market} alt="Market" height="120px" className="icon"></img>
              <h3><Trans i18nKey="keyPoints.point3.title"/></h3>
              <p className="text-medium"><Trans i18nKey="keyPoints.point3.text"/></p>
          </div>
        </div>
    </div>
);

export default KeyPoints;
