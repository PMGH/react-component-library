
import React from 'react';
import PropTypes from 'prop-types';
require('./ProgressBar.scss');

/**
* A progress bar component
*/
export default class ProgressBar extends React.Component {
  static propTypes = {
    /** The value prop represents the progress value, should be less than maxValue. E.g. 90 */
    value: PropTypes.number,
    /** The maxValue prop represents the maximum value E.g. 100. */
    maxValue: PropTypes.number
  }
  static defaultProps = {
    value: 20,
    maxValue: 100
  }
  constructor() {
    super();
    this.state = {
      percentage: '0'
    }
  }

  componentDidMount() {
    this.setState({percentage: this.percentage()})
  }

  percentage() {
    const { value, maxValue } = this.props;
    return (value / maxValue) * 100;
  }

  formatPercent(value) {
    return `${value}%`;
  }

  colorClassName() {
    if (this.props.barColor || this.props.textColor) {
      return '';
    }

    const { percentage } = this.state;
    if (percentage < 25) {
      return 'danger';
    } else if (percentage > 75) {
      return 'success';
    } else {
      return 'warning';
    }
  }

  render() {
    const { barColor, textColor } = this.props;
    const formattedPercent = this.formatPercent(this.state.percentage);
    return (
      <div className={"progress-container"}>
        <div
          className={`progress ${this.colorClassName()}`}
          style={{
            width: formattedPercent,
            color: textColor,
            backgroundColor: barColor
          }}
        >
          {formattedPercent}
        </div>
      </div>
    );
  }
}
