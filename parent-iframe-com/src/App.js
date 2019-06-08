import React from 'react';
import './App.css';

// addEventListener support for IE8
const bindEvent = (element, eventName, eventHandler) => {
  if (element.addEventListener){
    element.addEventListener(eventName, eventHandler, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + eventName, eventHandler);
  }
}

export default class App extends React.Component {
  componentDidMount() {
    const iframeSource = 'http://localhost:3001/';
    const iframeId = 'the_iframe';
    if (!document.getElementById(iframeId)) {
      // Create the iframe
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', iframeSource);
      iframe.setAttribute('id', 'the_iframe');
      iframe.style.width = 450 + 'px';
      iframe.style.height = 200 + 'px';
      iframe.style['text-align'] = 'center';
      iframe.onload = () => {
        const  messageButton = document.getElementById('message_button');
        const results = document.getElementById('results');
        // Send a message to the child iframe
        const sendMessage = function(msg) {
          // Make sure you are sending a string, and to stringify JSON
          iframeEl.contentWindow.postMessage(msg, '*');
        };
        // Send random messge data on every button click
        bindEvent(messageButton, 'click', function (e) {
          const random = Math.random();
          sendMessage('' + random);
        });
        // Listen to message from child window
        bindEvent(window, 'message', function (e) {
          results.innerHTML = e.data;
        });
      };
      document.getElementById('iframe-wrapper').appendChild(iframe);
      // Send a message to the child iframe
      const iframeEl = document.getElementById(iframeId);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Parent Window</h1>
        <p>Send Message: <button id="message_button">Hi there iframe</button></p>
        <p>Got Message:</p>
        <div id="results"></div>
        <br/>
        <div id="iframe-wrapper" />
      </div>
    );
  }
}
