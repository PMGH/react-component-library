import React from 'react';
import PropTypes from 'prop-types';

/**
* A simple dropdown component.
*/
export default class Dropdown extends React.Component {
  static propTypes = {
    /** REQUIRED: The options prop should be provided. It should contain an array of options (object with id and value keys. */
    options: PropTypes.arrayOf(PropTypes.shape(
      {
        id: PropTypes.any,
        value: PropTypes.any
      }
    ))
  }
  static  defaultProps = {
    options: []
  }

  renderOptions() {
    return this.props.options.map(option => {
      return <option key={option.id}>{option.value}</option>
    })
  }

  render() {
    return(
      <select defaultValue="Please select">
        <option disabled>Please select</option>
        {this.renderOptions()}
      </select>
    );
  }
}
