import React from 'react';
import PropTypes from 'prop-types';

/**
* A simple list component.
*/
export default class List extends React.Component {
  static propTypes = {
    /** REQUIRED: The items prop should be provided. It should contain a string array of items */
    items: PropTypes.arrayOf(PropTypes.string),
    /** OPTIONAL: The orderedList prop can be used to add decimal values at the beginning of the list item, indicating its order in the list. */
    orderedList: PropTypes.bool
  }
  static  defaultProps = {
    items: [],
    orderedList: false
  }

  renderUl() {
    return(
      <ul>
        {this.renderItems()}
      </ul>
    );
  }

  renderOl() {
    return(
      <ol>
        {this.renderItems()}
      </ol>
    );
  }

  renderItems() {
    return this.props.items.map(item => {
      return <li>{item}</li>;
    })
  }

  render() {
    return(
      this.props.orderedList
      ? this.renderOl()
      : this.renderUl()
    );
  }
}
