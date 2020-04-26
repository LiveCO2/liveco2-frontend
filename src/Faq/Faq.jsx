import React from 'react';
import { Trans } from 'react-i18next';

const Faq  = () => {
    return (
        <div>
            <div className="containerRow">
                <h2><p><Trans i18nKey="faq.buyers.title"/></p></h2>
                <p><Trans i18nKey="faq.buyers.faqs.q1"/></p>
                <p><Trans i18nKey="faq.buyers.faqs.a1"/></p>
                <p><Trans i18nKey="faq.buyers.faqs.q2"/></p>
                <p><Trans i18nKey="faq.buyers.faqs.a2"/></p>
            </div>
            <div className="containerRow">
                <h2><p><Trans i18nKey="faq.sellers.title"/></p></h2>
                <p><Trans i18nKey="faq.sellers.faqs.q1"/></p>
                <p><Trans i18nKey="faq.sellers.faqs.a1"/></p>
                <p><Trans i18nKey="faq.sellers.faqs.q2"/></p>
                <p><Trans i18nKey="faq.sellers.faqs.a2"/></p>
                <p><Trans i18nKey="faq.sellers.faqs.q3"/></p>
                <p><Trans i18nKey="faq.sellers.faqs.a3"/></p>
                <p><Trans i18nKey="faq.sellers.faqs.q4"/></p>
                <p><Trans i18nKey="faq.sellers.faqs.a4"/></p>
                <p><Trans i18nKey="faq.sellers.faqs.q5"/></p>
                <p><Trans i18nKey="faq.sellers.faqs.a5"/></p>
                <p><Trans i18nKey="faq.sellers.faqs.q6"/></p>
                <p><Trans i18nKey="faq.sellers.faqs.a6"/></p>
            </div>
        </div>
    )
};

export default Faq;
