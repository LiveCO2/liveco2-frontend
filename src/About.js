import React from 'react';
import { Trans } from 'react-i18next';

const About  = () => {
	return (
	<div className="containerRow">
		<h2><p><Trans i18nKey="about.title"/></p></h2>
		<p><Trans i18nKey="about.description"/></p>
		<p><Trans i18nKey="about.text1"/></p>
		<p><Trans i18nKey="about.text2"/></p>
		<p><Trans i18nKey="about.text3"/></p>
	</div>
	)
};

export default About;
