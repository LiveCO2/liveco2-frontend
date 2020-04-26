import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import FaqItem from './../FaqItem/FaqItem';

import { Title, FaqBlock } from './styled.jsx';
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

class Faq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItemIndex: null,
        };
    }

    handleItemClick = (index) => {
        const { activeItemIndex } = this.state;
        if (activeItemIndex === index) {
            this.setState({ activeItemIndex: null });
        } else {
            this.setState({ activeItemIndex: index });
        }
    };

    render() {
        const { activeItemIndex } = this.state;
        return (
          <>
            <FaqBlock>
              <Title><Trans i18nKey="faq.sellers.title"/></Title>
                {sellers &&
                    sellers.map((item, index) => (
                        <FaqItem
                            key={item.title}
                            isActive={index === activeItemIndex}
                            index={index}
                            handleItemClick={this.handleItemClick}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
            </FaqBlock>
            <FaqBlock>
              <Title><Trans i18nKey="faq.buyers.title"/></Title>
                {buyers &&
                    buyers.map((item, index) => (
                        <FaqItem
                            key={item.title}
                            isActive={index === activeItemIndex}
                            index={index}
                            handleItemClick={this.handleItemClick}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
            </FaqBlock>
            </>
        );
    }
}

export default Faq;
