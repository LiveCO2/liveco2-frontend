import React from 'react';
import { useForm } from 'react-hook-form';
import { Trans } from 'react-i18next';

import "./Signup.scss"

function Signup() {
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmit = (data) => {
        console.log(data);
    };
      return (
          <div className="sign">
              <div className="signBox">
                <h2><Trans i18nKey="user.signup.title"/></h2>
                <h5>Compensa tu huella de carbono. Compra Toneladas de CO2 absorbidas. Desbloquea contenido exclusivo</h5>
                <form onSubmit={handleSubmit(onSubmit)} className="signupForm">
                    <div className="signupStep">
                        <label className="text-medium"><Trans i18nKey="user.signup.firstname"/></label>
                        <input 
                            type="text"
                            name="firstname"
                            ref={register({required: true, maxLength: 30})}
                        />
                    </div>

                    <div className="signupStep">
                        <label className="text-medium"><Trans i18nKey="user.signup.lastname"/></label>
                        <input 
                            type="text"
                            name="lastname"
                            ref={register({required: true, maxLength: 100})}
                        />
                    </div>

                    <div className="signupStep">
                        <label className="text-medium"><Trans i18nKey="user.signup.email"/></label>
                        <input 
                            type="text"
                            name="email"
                            ref={register({
                                required: true, 
                                maxLength: 100,
                                // eslint-disable-next-line
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,})}
                        />
                    </div>

                    <div className="signupStep">
                        <label className="text-medium"><Trans i18nKey="user.signup.password"/></label>
                        <input 
                            type="password"
                            name="password"
                            ref={register({
                                required: true,
                                validate: {
                                    has12Chars: value => value.length > 12,
                                    hasNumbers: value =>  /\d/.test(value),
                                    hasSpecialChar: value => /[!@$%&()_+={};,.]/.test(value),
                                }})}
                        />
                        <ul className="passwordRequirements">
                            <li><p className="text-small"><Trans i18nKey="user.signup.pw-const-1"/></p></li>
                            <li><p className="text-small"><Trans i18nKey="user.signup.pw-const-2"/></p></li>
                            <li><p className="text-small"><Trans i18nKey="user.signup.pw-const-3"/></p></li>
                        </ul>
                    </div>

                    {errors.firstname && (
                        <p className="formError"><Trans i18nKey="user.signup.errors.firstname"/></p>
                    )}
                    {errors.lastname && (
                        <p className="formError"><Trans i18nKey="user.signup.errors.lastname"/></p>
                    )}
                    {errors.email && (
                        <p className="formError"><Trans i18nKey="user.signup.errors.email"/></p>
                    )}
                    {errors.password &&  (
                        <p className="formError"><Trans i18nKey="user.signup.errors.password"/></p>
                    )}
                    <div className="signupStep">
                      <input type="submit" />
                    </div>

                    <div className="signupStep">
                        <p className="text-tiny"><Trans i18nKey="user.signup.disclaimer"/></p>
                    </div>

            </form>
         </div>

         <div className="signBox">
             <h2><Trans i18nKey="user.signin.title"/></h2>
                <form onSubmit={handleSubmit(onSubmit)} className="signupForm">
                    <div className="signupStep">
                        <label className="text-medium"><Trans i18nKey="user.signup.email"/></label>
                        <input 
                            type="text"
                            name="email"
                            ref={register({required: true})}
                        />
                    </div>
                    <div className="signupStep">
                        <label className="text-medium"><Trans i18nKey="user.signin.password"/></label>
                        <input 
                            type="password"
                            name="password"
                            ref={register({required: true,})}
                        />
                    </div>
                    <div className="signupStep">
                      <input type="submit" />
                    </div>
            </form>
         </div>
     </div>
  );
};

export default Signup;
