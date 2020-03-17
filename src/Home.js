import React from 'react';
import { Trans } from 'react-i18next';
 
const Home = () => (
	<div>
		<div className="containerRow">
			<div>
				<h2><p><Trans i18nKey="home.box1.title"/></p></h2>
				<p><Trans i18nKey="home.box1.text1"/></p>
				<p><Trans i18nKey="home.box1.text2"/></p>
				<p><Trans i18nKey="home.box1.text3"/></p>
			</div>
		</div>

		<div className="containerRowFlexRightText">
			<div className="rowFlexElement">
				<h2><p><Trans i18nKey="home.box2.title"/></p></h2>
				<p><Trans i18nKey="home.box2.text1"/></p>
			</div>
			<div className="rowFlexElementRightText">
				<h2><p><Trans i18nKey="home.box2.title"/></p></h2>
				<p><Trans i18nKey="home.box2.text1"/></p>
			</div>
		</div>

		<div className="containerRow">
			<div>
				<h2><p><Trans i18nKey="home.box3.title"/></p></h2>
				<p><Trans i18nKey="home.box3.text1"/></p>
			</div>
		</div>

		<div className="containerRowFlexLeftText">
			<div className="rowFlexElementLeftText">
				<h2><p><Trans i18nKey="home.box2.title"/></p></h2>
				<p><Trans i18nKey="home.box2.text1"/></p>
			</div>
			<div className="rowFlexElementLeftText">
				<h2><p><Trans i18nKey="home.box2.title"/></p></h2>
				<p><Trans i18nKey="home.box2.text1"/></p>
			</div>
		</div>
	</div>
);
 
export default Home;
