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
        <div className="form-group">
          <input name="username" placeholder="Username"></input>
          <input name="password" placeholder="Password" type="password"></input>
        </div>
        <Button buttonText='Sign in' size='large' onClick={(e) => console.log('button clicked')} />
      </form>
    );
  }
}
