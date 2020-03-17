import React from "react";
import { Trans } from 'react-i18next';
 
const Home = () => (
	<div>
		<div class="containerRow">
			<div>
				<p><h2><Trans i18nKey="home.box1.title"/></h2></p>
				<p><Trans i18nKey="home.box1.text1"/></p>
				<p><Trans i18nKey="home.box1.text2"/></p>
				<p><Trans i18nKey="home.box1.text3"/></p>
			</div>
		</div>

		<div class="containerRowFlexRightText">
			<div class="rowFlexElement">
				<p><h2><Trans i18nKey="home.box2.title"/></h2></p>
				<p><Trans i18nKey="home.box2.text1"/></p>
			</div>
			<div class="rowFlexElementRightText">
				<p><h2><Trans i18nKey="home.box2.title"/></h2></p>
				<p><Trans i18nKey="home.box2.text1"/></p>
			</div>
		</div>

		<div class="containerRow">
			<div>
				<p><h2><Trans i18nKey="home.box3.title"/></h2></p>
				<p><Trans i18nKey="home.box3.text1"/></p>
			</div>
		</div>

		<div class="containerRowFlexLeftText">
			<div class="rowFlexElementLeftText">
				<p><h2><Trans i18nKey="home.box2.title"/></h2></p>
				<p><Trans i18nKey="home.box2.text1"/></p>
			</div>
			<div class="rowFlexElementLeftText">
				<p><h2><Trans i18nKey="home.box2.title"/></h2></p>
				<p><Trans i18nKey="home.box2.text1"/></p>
			</div>
		</div>
	</div>
);
 
export default Home;
