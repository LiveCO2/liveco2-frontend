import React from 'react';
import { Trans } from 'react-i18next';

import Product from "../../Product/Product";
import "./Buy.scss"

//Icons
import silverMedal from '../../icons/silver-medal.svg'
import goldMedal from '../../icons/gold-medal.svg'
import crown from '../../icons/crown.svg'

const Buy = () => (
    <div className="buy">
        <div className="buyHeader">
            <h2><Trans i18nKey="buy.title"/></h2>
            <p><Trans i18nKey="buy.description"/></p>
        </div>
        <div className="buyProducts">
            <Product 
                img={silverMedal}
                title="buy.products.product1.title" 
                desc="buy.products.product1.description"
                price="buy.products.product1.price"
                buttonText="buy.products.button"
            />
            <Product 
                img={goldMedal}
                title="buy.products.product2.title" 
                desc="buy.products.product2.description"
                price="buy.products.product2.price"
                buttonText="buy.products.button"
            />
            <Product 
                img={crown}
                title="buy.products.product3.title" 
                desc="buy.products.product3.description"
                price="buy.products.product3.price"
                buttonText="buy.products.button"
            />
        </div>
    </div>
);

export default Buy;
