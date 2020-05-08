import React from 'react';
import { Trans } from 'react-i18next';

import Product from "./Product/Product";

//Icons
import silverMedal from './icons/silver-medal.svg'
import goldMedal from './icons/gold-medal.svg'
import crown from './icons/crown.svg'

const Buy = () => (
    <div>
        <div className="containerRow">
            <h2><Trans i18nKey="buy.title"/></h2>
            <p><Trans i18nKey="buy.description"/></p>
        </div>
        <div className="containerRow">
            <Product 
                img={silverMedal}
                title="buy.products.product1.title" 
                desc="buy.products.product1.description"
                price="buy.products.product1.price"
            />
            <Product 
                img={goldMedal}
                title="buy.products.product2.title" 
                desc="buy.products.product2.description"
                price="buy.products.product2.price"
            />
            <Product 
                img={crown}
                title="buy.products.product3.title" 
                desc="buy.products.product3.description"
                price="buy.products.product3.price"
            />
        </div>
    </div>
);

export default Buy;
