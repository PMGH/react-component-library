import React from 'react';
import Button from '../Button/Button';

/**
* A login form component.
*/
export default class LoginForm extends React.Component {
  render() {
    return(
      <form className="login-form">
        <div className="form-title">Login</div>
        <img className="login-icon" src="https://cdn0.iconfinder.com/data/icons/web-development-and-studio/512/90_security_Employee_insurance_person_personal_protection_shield-512.png"></img>
        <div className="form-group">
          <input name="username" placeholder="Username"></input>
          <input name="password" placeholder="Password" type="password"></input>
        </div>
        <Button buttonText='Sign in' size='large' onClick={(e) => console.log('button clicked')} />
      </form>
    );
  }
}
