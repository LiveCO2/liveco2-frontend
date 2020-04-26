import React from 'react';
import { Trans } from 'react-i18next';

import Product from "./Product/Product";

const Buy = () => (
    <div className="containerRow">
        <h2><p><Trans i18nKey="buy.title"/></p></h2>
        <p><Trans i18nKey="buy.description"/></p>
        <Product/>
    </div>
);

export default Buy;
