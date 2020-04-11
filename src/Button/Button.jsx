import React from 'react';
import { Trans } from 'react-i18next';

import './Button.css';

const Button = ({ link, tk }) => (
    <a className="button" href={link}>
      <Trans i18nKey={tk}/>
    </a>
);

export default Button;
