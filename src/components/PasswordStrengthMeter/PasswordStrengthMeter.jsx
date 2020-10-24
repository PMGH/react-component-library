import React from 'react';
import zxcvbn from 'zxcvbn';
import ProgressBar from '../ProgressBar/ProgressBar';

/**
* A password strength meter component that renders a progress bar, password feedback (if provided by zxcvbn) and an text input.
*/
export default class PasswordStrengthMeter extends React.Component {
  constructor() {
    super();
    this.state = {
      strength: 0,
      feedback: '',
      password: '',
      passwordVisible: false
    }
  }

  onChange(e) {
    const password = e.target.value;
    this.calculateStrength(password);
  }

  calculateStrength(password) {
    const zxcvbnObj = zxcvbn(password);
    const score = zxcvbnObj.score;
    const feedback = zxcvbnObj.feedback.warning;
    this.setState({
      strength: score,
      feedback: feedback,
      password
    })
  }

  togglePasswordVisibility() {
    console.log('toggling password visibility')
    this.setState({ passwordVisible: !this.state.passwordVisible })
  }

  render() {
    const { strength, feedback, passwordVisible } = this.state;
    return (
      <div className={"password-strength-container"}>
        <div class="controls show-hide-wpd">
          <input id="password" className="password-input" placeholder="Enter password" type={passwordVisible ? "text" : "password"} onChange={(e) => this.onChange(e)} />
          <span onClick={() => this.togglePasswordVisibility()} class="icon-eye show-pwd">{passwordVisible ? "Hide" : "Show"}</span>
        </div>
        <ProgressBar value={strength} maxValue={4} displayValue={true} />
        <p className="password-feedback">{feedback}</p>
      </div>
    );
  }
}
