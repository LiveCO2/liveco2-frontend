import React, { Suspense } from 'react';
import { Trans } from 'react-i18next';

const About  = () => {
	return (
	<div>
		<h2><Trans i18nKey="about.title"/></h2>
		<Trans i18nKey="about.description"/>
		<Trans i18nKey="about.text1"/>
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
