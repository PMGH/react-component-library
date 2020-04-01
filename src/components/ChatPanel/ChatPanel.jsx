import React from 'react';

/**
* A chat panel component.
*/
export default class ChatPanel extends React.Component {
  constructor(props) {
    super(props)
    const messageColor = this.randomColor();

    this.state = {
      color: messageColor,
      messages: [
        { user: 'System', content: 'Renders messages from state.', createdAt: this.time() },
        { user: 'System', content: "Doesn't use an Event Emitter.", createdAt: this.time() }
      ]
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
          user: this.props.user,
          content,
          createdAt: this.time(),
          color: this.state.color
        }
        this.setState({
          messages: [...this.state.messages, message]
        })
        this.clearInput();
        this.emitMessage(message);
      }
    }
  }

  renderMessages() {
    let messages = [];
    if (this.props.messages) {
      console.log('rendering messages from props: ', this.props)
      messages = this.props.messages.map((message, index) => (
        this.renderMessage(message, index)
      ))
    } else {
      console.log('rendering messages from state: ', this.state)
      messages = this.state.messages.map((message, index) => (
        this.renderMessage(message, index)
      ))
    }
    return messages;
  }

  renderMessage(message, index) {
    const currentUser = message.user === this.props.user;
    let alignment = 'flex-start';
    let textAlign = 'left';

    if (currentUser) {
      alignment = 'flex-end';
      textAlign = 'right';
    }

    return (
      <div key={index} className="chat-message" style={{ justifyContent: alignment }}>
        <p className="chat-message-content" style={{ backgroundColor: message.color }}>{message.content}</p>
        <span className="chat-time" style={{ textAlign: textAlign }}>{message.createdAt}</span>
      </div>
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

  randomColor() {
    const colorCode = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + colorCode;
  }

  emitMessage(message) {
    this.props.emitter && this.props.emitter.emit('newMessage', message);
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
