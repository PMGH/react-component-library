
import React from 'react';
import PropTypes from 'prop-types';

/**
* A progress bar component that changes colour (red, amber, green) depending on progress. It displays a percentage by default but a prop (displayValue) can be set to true to display the value instead. Text Colour and Progress Bar colour can also be set by props.
*/
export default class ProgressBar extends React.Component {
  static propTypes = {
    /** REQUIRED: The value prop represents the progress value, should be less than maxValue. E.g. {90} */
    value: PropTypes.number.isRequired,
    /** REQUIRED: The maxValue prop represents the maximum value E.g. {100} */
    maxValue: PropTypes.number.isRequired,
    /** OPTIONAL: The barColor prop can be a string color including hex code. E.g. 'yellow' */
    barColor: PropTypes.string,
    /** OPTIONAL: The textColor prop can be a string color including hex code. E.g. 'black' */
    textColor: PropTypes.string,
    /** OPTIONAL: The displayValue prop can be set to true to display the value instead of the percentage. */
    displayValue: PropTypes.bool
  }
  static defaultProps = {
    value: 20,
    maxValue: 100,
    displayValue: false
  }

  percentage() {
    const { value, maxValue } = this.props;
    if (!value || !maxValue) { return 0 }

    return (value / maxValue) * 100;
  }

  formatPercent(value) {
    return value + '%';
  }

  colorClassName(percent) {
    if (this.props.barColor || this.props.textColor) {
      return '';
    }

    if (percent < 25) {
      return 'danger';
    } else if (percent > 75) {
      return 'success';
    } else {
      return 'warning';
    }
  }

  render() {
    const { value, barColor, textColor, displayValue } = this.props;
    const percent = this.percentage();
    const formattedPercent = this.formatPercent(percent);
    return (
      <div className={"progress-container"}>
        { percent > 0 &&
          <div
            className={`progress ${this.colorClassName(percent)}`}
            style={{
              width: formattedPercent,
              color: textColor,
              backgroundColor: barColor
            }}
          >
          { displayValue ? value : formattedPercent }
          </div>
        }
      </div>
    );
  }
}
