import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import FaqItem from './../FaqItem/FaqItem';
import { FaqBlockContainer, Title } from './styled';

class FaqBlock extends Component {
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
    const { block, blockTitle } = this.props;
    const { activeItemIndex } = this.state;

    return (
      <FaqBlockContainer>
      <Title><Trans i18nKey={blockTitle}/></Title>
        {block &&
            block.map((item, index) => (
                <FaqItem
                    key={item.title}
                    isActive={index === activeItemIndex}
                    index={index}
                    handleItemClick={this.handleItemClick}
                    title={item.title}
                    description={item.description}
                />
            ))}
      </FaqBlockContainer>
    );
  };
};

export default FaqBlock;
