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
      const content = event.target.value;
      if (content.length > 0) {
        const message = {
          content,
          createdAt: this.time()
        }
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
        <div key={index} className="chat-message">
          <p className="chat-message-content">{message.content}</p>
          <span className="chat-time">{message.createdAt}</span>
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
