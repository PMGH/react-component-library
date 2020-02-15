
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
      strength: 0
    }
  }

  onChange(e) {
    const password = e.target.value;
    const strength = this.calculateStrength(password);
    this.setState({ strength: strength })
  }

  calculateStrength(password) {
    return zxcvbn(password).score;
  }

  render() {
    return (
      <div className={"password-strength-container"}>
        <ProgressBar value={this.state.strength} maxValue={4} displayValue={true} />
        <input onChange={(e) => this.onChange(e)} />
      </div>
    );
  }
}
