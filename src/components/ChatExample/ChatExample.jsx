import React from 'react';
import ChatPanel from '../ChatPanel/ChatPanel';

/**
 * A chat example.
 */
export default class ChatExample extends React.Component {
  constructor() {
    super()

    const EventEmitter = require('events');
    const emitter = new EventEmitter();

    emitter.on('newMessage', (message) => { this.updateMessages(message) })

    this.state = {
      emitter,
      messages: [
        { user: 'System', content: 'Renders messages passed in through props.', createdAt: this.time() },
        { user: 'System', content: 'Emits messages through an Event Emitter that is passed in through props.', createdAt: this.time() }
      ]
    }
  }

  updateMessages(message) {
    this.setState({ messages: [...this.state.messages, message] })
  }

  time() {
    const now = new Date();
    return now.toUTCString();
  }

  render() {
    return (
      <div className="chat-panel-container">
        <ChatPanel user="Tester 1" messages={this.state.messages} emitter={this.state.emitter}></ChatPanel>
        <ChatPanel user="Tester 2" messages={this.state.messages} emitter={this.state.emitter}></ChatPanel>
      </div>
    );
  }
}
