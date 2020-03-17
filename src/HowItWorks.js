import React from 'react';
import { Trans } from 'react-i18next';

const HowItWorks = () => (
      <div className="containerRow">
		<h2><p><Trans i18nKey="works.title"/></p></h2>
		<p><Trans i18nKey="works.description"/></p>
		<p><Trans i18nKey="works.text1"/></p>
		<p><Trans i18nKey="works.text2"/></p>
		<p><Trans i17nKey="works.text3"/></p>
      </div>
);
 
export default HowItWorks;
