import React from 'react';
import PropTypes from 'prop-types';

/**
* A alphabetical list component.
*/
export default class ListAlphabetical extends React.Component {
  static propTypes = {
    /** REQUIRED: The items prop should be provided. It should contain a string array of items */
    items: PropTypes.arrayOf(PropTypes.string)
  }
  static  defaultProps = {
    items: []
  }

  groupItems() {
    const groups = {};

    this.props.items.forEach(item => {
      const letter = item[0];
      if (Object.keys(groups).includes(letter)) {
        groups[letter].push(item);
      } else {
        groups[letter] = [item];
      }
    })
    console.log("groups: ", groups);
    return groups;
  }

  renderLists(groups) {
    return Object.keys(groups).map((key, index) => {
      return (
        <div key={index} className="alphabetical-list-group">
          <p className="alphabetical-list-letter">
            {key}
          </p>
          <ul className="alphabetical-list-group-items">
            {this.renderItems(groups[key])}
          </ul>
        </div>
      )
    });
  }

  renderItems(items) {
    console.log("render items: ", items)
    return items.sort().map(item => {
      return <li className="alphabetical-list-item">{item}</li>;
    })
  }

  render() {
    const groups = this.groupItems();

    return(
      this.renderLists(groups)
    );
  }
}
