import React from 'react';
import Panel from '../Panel/Panel';

/**
* A chat panel component that renders it's children.
*/
export default class ChatPanel extends React.Component {
  handleKeyDown(event) {
    if (event.key === 'Enter') {
      const message = event.target.value;
      if (message.length > 0) {
        console.log('message: ', message)
        // submit message
      }
    }
  }

  renderMessages() {
    return(
      <p>Messages from websocket</p>
    )
  }

  render() {
    return (
      <Panel>
        <div className="chat-container">
          <div className="chat-output">
            { this.renderMessages() }
          </div>

          <div className="chat-input">
            <input
              placeholder="Type message..."
              className="chat-input"
              onKeyDown={(event) => { this.handleKeyDown(event) }}
            >
            </input>
          </div>
        </div>
      </Panel>
    );
  }
}
