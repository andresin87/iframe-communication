import React from 'react';
import './Parent.css';

import { bindEvent, unbindEvent } from './helpers';
import sendRandomNumber from './action/sendRandomNumber';

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.updateValues = e => {
      debugger;
      switch (e.data.event_type) {
        case 'resize':
          this.bounds.innerHTML = JSON.stringify(e.data, null, 2);
          this.iframeEl.style.height = `${e.data.height}px`;
          // this.iframeEl.style.width = `${e.data.width}px`;
          break;
        case 'communication':
        default:
          this.results.innerHTML = e.data.number;
          break;
      }
    };
  }

  componentDidMount() {
    this.iframeSource = 'http://localhost:3001/';
    this.iframeId = 'the_iframe';
    if (!document.getElementById(this.iframeId)) {
      this.messageButton = document.getElementById('message_button');
      this.results = document.getElementById('results');
      this.bounds = document.getElementById('bounds');

      this.createIframe();
    }
  }

  createIframe() {
    // Create the iframe
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', this.iframeSource);
    iframe.setAttribute('id', this.iframeId);
    iframe.style.width =  '100%';
    iframe.style.height = 200 + 'px';
    iframe.style.border = 0;
    iframe.style['text-align'] = 'center';
    iframe.onload = event => {
      // Listen to message from child window
      bindEvent(window, 'message', this.updateValues);
      // Send random message data on every button click
      bindEvent(this.messageButton, 'click', e => sendRandomNumber(iframe, e));
    };
    document.getElementById('iframe-wrapper').appendChild(iframe);
    // Send a message to the child iframe
    this.iframeEl = document.getElementById(this.iframeId);
  }

  render() {
    return (
      <div className="Parent">
        <h1>Parent Window</h1>
        <p>Send Message: <button id="message_button">Hi there iframe</button></p>
        <p>Got Message:</p>
        <div id="results"></div>
        <p>Bounds:</p>
        <div id="bounds"></div>
        <br/>
        <div id="iframe-wrapper" />
      </div>
    );
  }
}
