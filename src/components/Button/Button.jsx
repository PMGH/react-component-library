import React from 'react';
import PropTypes from 'prop-types';
require('./Button.scss');

const defaultOnClick = () => {
  return console.log('Please provide an onClick prop set to a function');
}

/**
* A simple button component
*/
export default class Button extends React.Component {
  static propTypes = {
    /** The size prop can be provided and will supply a size class to the button. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** The onClick prop should be set to a function that will be called when the button is clicked. */
    onClick: PropTypes.func
  }
  static  defaultProps = {
    size: 'medium',
    onClick: () => defaultOnClick()
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
        Click me!
      </button>
    );
  }
}
