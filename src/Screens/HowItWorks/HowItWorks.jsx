import React from 'react';
import { Trans } from 'react-i18next';

import "./HowItWorks.scss"

const HowItWorks = () => (
    <div className="containerRow">
        <div className="worksHeader">
            <h2><Trans i18nKey="works.title"/></h2>
            <p><Trans i18nKey="works.description"/></p>
        </div>
        <p><Trans i18nKey="works.text1"/></p>
        <p><Trans i18nKey="works.text2"/></p>
        <p><Trans i17nKey="works.text3"/></p>
    </div>
);

export default HowItWorks;
