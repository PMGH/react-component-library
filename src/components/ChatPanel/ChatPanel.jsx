import React from 'react';

/**
* A chat panel component that renders it's children.
*/
export default class ChatPanel extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      const message = event.target.value;
      if (message.length > 0) {
        // submit message
        this.setState({
          messages: [...this.state.messages, message]
        })
        this.clearInput();
      }
    }
  }

  renderMessages() {
    return(
      this.state.messages.map((message, index) => (
        <div className="chat-message">
          <p key={index} className="chat-message-content">{message}</p>
          <span className="chat-time">{this.time()}</span>
        </div>
    ))
    )
  }

  time() {
    const now = new Date();
    return now.toUTCString();
  }

  clearInput() {
    const chatInputs = document.getElementsByClassName("chat-input");
    chatInputs.forEach(input => input.value = '');
  }

  scrollToBottom() {
    const chatOutputs = document.getElementsByClassName("chat-output");
    chatOutputs.forEach(output => output.scrollTop = output.scrollHeight)
  }

  render() {
    return (
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
    );
  }
}
