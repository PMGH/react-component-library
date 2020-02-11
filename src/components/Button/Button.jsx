import React from 'react';
import PropTypes from 'prop-types';

const defaultOnClick = () => {
  return console.log('Please provide an onClick prop set to a function');
}

/**
* A simple button component
*/
export default class Button extends React.Component {
  static propTypes = {
    /** OPTIONAL: The size prop can be provided and will supply a size class to the button. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** OPTIONAL: The onClick prop should be set to a function that will be called when the button is clicked. */
    onClick: PropTypes.func,
    /** OPTIONAL: The buttonText prop can be used to set the text displayed on the button. */
    buttonText: PropTypes.string
  }
  static  defaultProps = {
    size: 'medium',
    onClick: () => defaultOnClick(),
    buttonText: 'Click me!'
  }

  sizeClass() {
    switch(this.props.size) {
      case 'small':
        return 'btn-small';
      case 'large':
        return 'btn-large';
      default:
        return 'btn-medium';
    }
  }

  render() {
    return(
      <button className={this.sizeClass()} onClick={this.props.onClick}>
        {this.props.buttonText}
      </button>
    );
  }
}
