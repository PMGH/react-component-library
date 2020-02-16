
import React from 'react';
import PropTypes from 'prop-types';

/**
* An icon bar component that renders an icon and a span of text.
*/
export default class IconBar extends React.Component {
  static propTypes = {
    /** REQUIRED: The iconUrl prop is the source URL of the icon. */
    iconUrl: PropTypes.string.isRequired,
    /** REQUIRED: The text prop represents the text that will be displayed. */
    text: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="icon-bar">
        <img src={this.props.iconUrl} alt="Icon" className="icon" />
        <span>{this.props.text}</span>
      </div>
    );
  }
}
