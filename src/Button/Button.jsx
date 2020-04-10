import React from 'react';
import { Trans } from 'react-i18next';

import './Button.css';

const Button = ({ link, tk }) => (
    <a class="button" href={link} target="_blank" rel="nofollow noopener">
      <Trans i18nKey={tk}/>
    </a>
);

export default Button;
