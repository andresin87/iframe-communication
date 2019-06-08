import React from 'react';
import './App.css';

// addEventListener support for IE8
const bindEvent = (element, eventName, eventHandler) => {
  if (element.addEventListener) {
    element.addEventListener(eventName, eventHandler, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + eventName, eventHandler);
  }
};

export default class App extends React.Component {
  componentDidMount() {
    // Send a message to the parent
    const sendMessage = function (msg) {
      // Make sure you are sending a string, and to stringify JSON
      window.parent.postMessage(msg, '*');
    };
    const results = document.getElementById('results');
    const messageButton = document.getElementById('message_button');
    // Listen to messages from parent window
    bindEvent(window, 'message', function (e) {
      results.innerHTML = e.data;
    });
    // Send random message data on every button click
    bindEvent(messageButton, 'click', function (e) {
      const random = Math.random();
      sendMessage('' + random);
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello there, i'm an iframe</h1>
        <p>Send Message: <button id="message_button">Hi parent</button></p>
        <p>Got Message:</p>
        <div id="results"></div>
      </div>
    );
  }
}
