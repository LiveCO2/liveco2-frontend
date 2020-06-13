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
          <div>
              <div className="signup">
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
                                    hasSpecialChar: value => /[!@$%&()_+={};,.<>]/.test(value),
                                }})}
                        />
                    </div>

                    {errors.firstname && (
                        <p><Trans i18nKey="user.signup.errors.firstname"/></p>
                    )}
                    {errors.lastname && (
                        <p><Trans i18nKey="user.signup.errors.lastname"/></p>
                    )}
                    {errors.email && (
                        <p><Trans i18nKey="user.signup.errors.email"/></p>
                    )}
                    {errors.password &&  (
                        <p><Trans i18nKey="user.signup.errors.password"/></p>
                    )}
                  <input type="submit" />
            </form>
         </div>
         <div className="singin">
             <h2><Trans i18nkey="user.signin.title"/></h2>
         </div>
     </div>
  );
};

export default Signup;
