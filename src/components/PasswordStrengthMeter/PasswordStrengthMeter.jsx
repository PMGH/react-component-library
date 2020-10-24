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
      password: ''
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

  render() {
    const { strength, feedback } = this.state;
    return (
      <div className={"password-strength-container"}>
        <input className="password-input" placeholder="Enter password" type="password" onChange={(e) => this.onChange(e)} />
        <ProgressBar value={strength} maxValue={4} displayValue={true} />
        <p className="password-feedback">{feedback}</p>
      </div>
    );
  }
}
