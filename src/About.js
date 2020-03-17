import React, { Suspense } from 'react';
import { Trans } from 'react-i18next';

const About  = () => {
	return (
	<div class="container-row">
		<p><h2><Trans i18nKey="about.title"/></h2></p>
		<p><Trans i18nKey="about.description"/></p>
		<p><Trans i18nKey="about.text1"/></p>
		<p><Trans i18nKey="about.text2"/></p>
		<p><Trans i18nKey="about.text3"/></p>
	</div>
	)
};

// i18n translations might still be loaded by the xhr backend
// use react's Suspense
export default function App() {
return (
<Suspense fallback="loading">
<About />
</Suspense>
);
}
