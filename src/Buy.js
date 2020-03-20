import React from 'react';
import { Trans } from 'react-i18next';

const Buy = () => (
    <div className="containerRow">
        <h2><p><Trans i18nKey="buy.title"/></p></h2>
        <p><Trans i18nKey="buy.description"/></p>
        <p><Trans i18nKey="buy.text1"/></p>
        <p><Trans i18nKey="buy.text2"/></p>
        <p><Trans i17nKey="buy.text3"/></p>
    </div>
);

export default Buy;
