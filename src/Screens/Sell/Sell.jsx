import React from 'react';
import { Trans } from 'react-i18next';

import "./Sell.scss"

const Sell = () => (
    <div className="containerRow">
        <h2 className="sellHeader"><Trans i18nKey="sell.title"/></h2>
        <p><Trans i18nKey="sell.description"/></p>
        <p><Trans i18nKey="sell.text1"/></p>
        <p><Trans i18nKey="sell.text2"/></p>
        <p><Trans i17nKey="sell.text3"/></p>
    </div>
);

export default Sell;
