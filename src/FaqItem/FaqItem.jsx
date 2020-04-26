import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';

import {
    OutterWrap,
    InnerWrap,
    Question,
    Indicator,
    Answer,
    AnswerText,
} from './styled';

class FaqItem extends Component {
    onItemClick = () => {
        const { handleItemClick, index } = this.props;
        handleItemClick(index);
    };

    render() {
        const { isActive, title, description } = this.props;

        return (
          <OutterWrap>
              <InnerWrap onClick={this.onItemClick}>
                  <Question><Trans i18nKey={title}/></Question>
                  <Indicator>{isActive ? '-' : '+'}</Indicator>
              </InnerWrap>
              <Answer isActive={isActive}>
                  <AnswerText><Trans i18nKey={description}/></AnswerText>
              </Answer>
          </OutterWrap>
        );
    }
}


FaqItem.propTypes = {
    handleItemClick: PropTypes.func,
    index: PropTypes.number.isRequired,
    isActive: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
};

FaqItem.defaultProps = {
    isActive: false,
    title: null,
    description: null,
    handleItemClick: () => {},
};

export default FaqItem;
