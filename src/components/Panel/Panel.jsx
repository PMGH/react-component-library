
import React from 'react';

/**
* A panel component
*/
export default class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        {this.props.children}
      </div>
    );
  }
}
