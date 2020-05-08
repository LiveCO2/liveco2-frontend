import React, { useState, useCallback } from 'react';
import { Trans } from 'react-i18next';

import FaqItem from './../FaqItem';
import { FaqBlockContainer, Title } from './styled';

const FaqBlock = ({ block, blockTitle }) => {
  const [activeStepIndex, setActiveItem] = useState({});
  const handleItemClick = useCallback(
    (index) => {
        setActiveItem({
            ...activeStepIndex,
            [index]: !activeStepIndex[index],
        });
    },
    [activeStepIndex],
);
  return (
    <FaqBlockContainer>
    <Title><Trans i18nKey={blockTitle}/></Title>
      {block &&
          block.map((item, index) => (
              <FaqItem
                  key={item.title}
                  isActive={activeStepIndex[index] === true}
                  handleItemClick={handleItemClick}
                  index={index}
                  title={item.title}
                  description={item.description}
              />
          ))}
    </FaqBlockContainer>
  )
};

export default FaqBlock;
