
import React from 'react';
import zxcvbn from 'zxcvbn';
import ProgressBar from '../ProgressBar/ProgressBar';

/**
* A password strength component
*/
export default class PasswordStrength extends React.Component {
  constructor() {
    super();
    this.state = {
      strength: 0,
      feedback: ''
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
      feedback: feedback
    })
  }

  render() {
    const { strength, feedback } = this.state;
    return (
      <div className={"password-strength-container"}>
        <ProgressBar value={strength} maxValue={4} displayValue={true} />
        { feedback &&
          <p className="password-feedback">{feedback}</p>
        }
        <input className="password-input" placeholder="Enter password" onChange={(e) => this.onChange(e)} />
      </div>
    );
  }
}
