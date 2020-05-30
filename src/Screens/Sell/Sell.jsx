import React from 'react';
import { Trans } from 'react-i18next';

import "./Sell.scss"

import checklist from '../../icons/checklist.svg'
import send from '../../icons/send.svg'
import payment from '../../icons/payment-method.svg'
import contract from '../../icons/contract.svg'
import Button from '../../Button';

const Sell = () => (
    <div className="sell">
        <div className="sellHeader">
            <h2><Trans i18nKey="sell.description"/></h2>
            <p className="text-big"><Trans i18nKey="sell.text1"/></p>
        </div>
        <div className="sellSteps">
            <div className="sellStep">
              <h3><Trans i18nKey="sell.steps.step1.title"/></h3>
              <img src={checklist} alt="Requirements" height="70px" className="icon"></img>
              <p className="text-medium"><Trans i18nKey="sell.steps.step1.text"/></p>
            </div>
            <div className="sellStep">
              <h3><Trans i18nKey="sell.steps.step2.title"/></h3>
              <img src={send} alt="Send" height="70px" className="icon"></img>
              <p className="text-medium"><Trans i18nKey="sell.steps.step2.text"/></p>
            </div>
            <div className="sellStep">
              <h3><Trans i18nKey="sell.steps.step3.title"/></h3>
              <img src={contract} alt="Contract" height="70px" className="icon"></img>
              <p className="text-medium"><Trans i18nKey="sell.steps.step3.text"/></p>
            </div>
            <div className="sellStep">
              <h3><Trans i18nKey="sell.steps.step4.title"/></h3>
              <img src={payment} alt="Payment" height="70px" className="icon"></img>
              <p className="text-medium"><Trans i18nKey="sell.steps.step4.text"/></p>
            </div>
            <div>
              <h3>Interesado?</h3>
            </div>
            <div className="sellButton">
              <Button link="contact" tk="sell.button" />
            </div>
        </div>
    </div>

);

export default Sell;
