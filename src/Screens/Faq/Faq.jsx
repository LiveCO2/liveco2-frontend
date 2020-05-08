import React from 'react';

import FaqBlock from './../../FaqBlock/FaqBlock';
import { FaqContainer } from './styled';

const general = [
  {
    title: "faq.general.faqs.q1",
    description: "faq.general.faqs.a1"
  },
  {
    title: "faq.general.faqs.q2",
    description: "faq.general.faqs.a2"
  },
  {
    title: "faq.general.faqs.q3",
    description: "faq.general.faqs.a3"
  },
  {
    title: "faq.general.faqs.q4",
    description: "faq.general.faqs.a4"
  }
]

const sellers = [
  {
    title: "faq.sellers.faqs.q1",
    description: "faq.sellers.faqs.a1"
  },
  {
    title: "faq.sellers.faqs.q2",
    description: "faq.sellers.faqs.a2"
  },
  {
    title: "faq.sellers.faqs.q3",
    description: "faq.sellers.faqs.a3"
  },
  {
    title: "faq.sellers.faqs.q4",
    description: "faq.sellers.faqs.a4"
  },
  {
    title: "faq.sellers.faqs.q5",
    description: "faq.sellers.faqs.a5"
  },
  {
    title: "faq.sellers.faqs.q6",
    description: "faq.sellers.faqs.a6"
  },
];

const buyers = [
  {
    title: "faq.buyers.faqs.q1",
    description: "faq.buyers.faqs.a1"
  },
  {
    title: "faq.buyers.faqs.q2",
    description: "faq.buyers.faqs.a2"
  },
];

const Faq = () => (
      <FaqContainer>
        <FaqBlock block={general} blockTitle="faq.general.title" />
        <FaqBlock block={sellers} blockTitle="faq.sellers.title" />
        <FaqBlock block={buyers} blockTitle="faq.buyers.title" />
      </FaqContainer>
);

export default Faq;
