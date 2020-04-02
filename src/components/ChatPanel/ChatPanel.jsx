import React from 'react';
import PropTypes from 'prop-types';
import { currentTime, randomColor, scrollToBottomOf, clearValue, emitMessage } from '../../shared/utils';

/**
* A chat panel component.
*/
export default class ChatPanel extends React.Component {
  static propTypes = {
    /** OPTIONAL: The user prop can be provided and will be used to assign color to the message (see ChatExample). */
    user: PropTypes.string,
    /** OPTIONAL: The messages prop should be passed when connecting chats (see ChatExample). */
    messages: PropTypes.array,
    /** OPTIONAL: The event emitter (https://www.npmjs.com/package/events) prop should be passed when connecting chates (see ChatExample). */
    emitter: PropTypes.string
  }

  constructor(props) {
    super(props)
    const messageColor = randomColor();

    this.state = {
      color: messageColor,
      messages: [
        { user: 'System', content: 'Renders messages from state.', createdAt: currentTime() },
        { user: 'System', content: "Doesn't use an Event Emitter.", createdAt: currentTime() }
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
        const message = this.messagePayload(content);
        this.setState({ messages: [...this.state.messages, message] })
        this.clearInputs();
        emitMessage(this.props.emitter, message);
      }
    }
  }

  messagePayload(content) {
    return ({
      user: this.props.user,
      content,
      createdAt: currentTime(),
      color: this.state.color
    })
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
    const isCurrentUser = message.user === this.props.user;
    let alignment = 'flex-start';
    let textAlign = 'left';
    let color = '#8E9096'

    if (isCurrentUser) {
      alignment = 'flex-end';
      textAlign = 'right';
      color = message.color;
    }

    return (
      <div key={index} className="chat-message" style={{ justifyContent: alignment }}>
        <span className="chat-time" style={{ textAlign: textAlign }}>{message.createdAt}</span>
        <p className="chat-message-content" style={{ backgroundColor: color }}>{message.content}</p>
      </div>
    )
  }

  clearInputs() {
    const chatInputs = document.getElementsByClassName("chat-input");
    chatInputs.forEach(input => clearValue(input) );
  }

  scrollToBottom() {
    const chatOutputs = document.getElementsByClassName("chat-output");
    chatOutputs.forEach(output => scrollToBottomOf(output) )
  }

  render() {
    const borderStyle = !this.props.user ? { borderTop: 'none' } : {};

    return (
      <div className="chat-container">
        { this.props.user &&
          <div className="chat-header" style={{ color: this.state.color }}>
            <img className="chat-icon" src="https://cdn2.iconfinder.com/data/icons/user-interface-essential-solid/32/Artboard_53-512.png" alt="Chat person icon" />
            { this.props.user }
          </div>
        }
        <div className="chat-output" style={borderStyle}>
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
