import React from 'react';
import Button from '../Button/Button';
import PasswordStrengthMeter from '../PasswordStrengthMeter/PasswordStrengthMeter';

/**
* A sign up form component.
*/
export default class SignUpForm extends React.Component {
  render() {
    return(
      <form className="sign-up-form">
        <div className="form-title">Sign Up</div>
        <img className="signup-icon" src="https://cdn0.iconfinder.com/data/icons/web-development-and-studio/512/90_security_Employee_insurance_person_personal_protection_shield-512.png"></img>
        <div className="form-group">
          <div className="form-group-related-inputs">
            <input name="firstName" placeholder="First name"></input>
            <input name="lastName" placeholder="Last name"></input>
          </div>
          <input name="username" placeholder="Username"></input>

          <hr />

          <PasswordStrengthMeter />
          <input name="password-confirmation" placeholder="Confirm password" type="password"></input>
        </div>
        <Button buttonText='Sign up' size='large' onClick={(e) => console.log('button clicked')} />
      </form>
    );
  }
}
