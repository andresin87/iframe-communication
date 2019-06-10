import React from 'react';
import './Children.css';

import { bindEvent, unbindEvent } from './helpers';
import sendRandomNumber from './actions/sendRandomNumber';
import sendBoundingArea from './actions/sendBoundingArea';

export default class Children extends React.Component {
  constructor(props) {
    super(props);
    this.updateNumber = e => {
      if (this.results) {
        this.results.innerHTML = e.data.number;
      }
    };
  }

  componentDidMount() {
    this.results = document.getElementById('results');
    this.messageButton = document.getElementById('message_button');

    // Listen to messages from parent window
    bindEvent(window, 'message', this.updateNumber);
    // Send random message data on every button click
    bindEvent(this.messageButton, 'click', sendRandomNumber);
    // Send bounding area
    bindEvent(window, 'resize', sendBoundingArea);
    // Send bounding area
    bindEvent(window, 'load', sendBoundingArea);
  }
  componentWillUnmount() {
    // Listen to messages from parent window
    unbindEvent(window, 'message', this.updateNumber);
    // Send random message data on every button click
    unbindEvent(this.messageButton, 'click', sendRandomNumber);
    // Send bounding area
    unbindEvent(window, 'resize', sendBoundingArea);
  }
  render() {
    return (
      <div className="Children">
        <h1>Hello there, i'm an iframe</h1>
        <p>Send Message: <button id="message_button">Hi parent</button></p>
        <p>Got Message:</p>
        <div id="results">null</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus feugiat. Tellus orci ac auctor augue mauris augue neque. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Amet est placerat in egestas erat imperdiet sed euismod nisi. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Vitae sapien pellentesque habitant morbi tristique senectus et. Viverra orci sagittis eu volutpat odio. Auctor eu augue ut lectus arcu bibendum at varius vel. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Risus nullam eget felis eget nunc lobortis. Fames ac turpis egestas sed tempus.</p>
        <p>Enim nec dui nunc mattis enim ut tellus. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Imperdiet massa tincidunt nunc pulvinar. Integer quis auctor elit sed. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Lectus proin nibh nisl condimentum id venenatis a condimentum. Nisi porta lorem mollis aliquam ut porttitor. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Leo integer malesuada nunc vel. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Vel quam elementum pulvinar etiam non. Dui sapien eget mi proin sed. Turpis in eu mi bibendum neque egestas congue quisque egestas. Cum sociis natoque penatibus et. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Ut tristique et egestas quis ipsum. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Non curabitur gravida arcu ac tortor dignissim convallis. Euismod lacinia at quis risus sed vulputate odio. Lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
        <p>Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Leo a diam sollicitudin tempor id eu. Ac turpis egestas integer eget. Aenean sed adipiscing diam donec adipiscing tristique. Sit amet dictum sit amet justo donec enim diam vulputate. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Elementum curabitur vitae nunc sed velit dignissim sodales. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Velit dignissim sodales ut eu sem. At consectetur lorem donec massa sapien faucibus et molestie ac. Vitae auctor eu augue ut lectus arcu bibendum at varius. Nibh sed pulvinar proin gravida. Pretium fusce id velit ut tortor pretium viverra. Duis ut diam quam nulla porttitor massa.</p>
        <p>Mauris sit amet massa vitae tortor condimentum lacinia. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Lectus sit amet est placerat in egestas erat. Volutpat est velit egestas dui id ornare arcu. In ante metus dictum at tempor commodo ullamcorper. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Nibh tellus molestie nunc non blandit massa enim nec. In hac habitasse platea dictumst quisque sagittis purus sit. Sit amet purus gravida quis. Ut aliquam purus sit amet luctus venenatis lectus. Ultrices eros in cursus turpis massa. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Et malesuada fames ac turpis. Scelerisque in dictum non consectetur a erat nam. Dui nunc mattis enim ut tellus elementum. In dictum non consectetur a erat. Sem nulla pharetra diam sit amet. Pretium viverra suspendisse potenti nullam. In eu mi bibendum neque.</p>
        <p>Eu facilisis sed odio morbi quis commodo. At urna condimentum mattis pellentesque id nibh. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Dolor sit amet consectetur adipiscing. Eget egestas purus viverra accumsan. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Ut placerat orci nulla pellentesque. Ornare massa eget egestas purus viverra accumsan in nisl. Condimentum id venenatis a condimentum vitae. Morbi non arcu risus quis varius quam quisque. Elementum nisi quis eleifend quam adipiscing. Amet aliquam id diam maecenas. Amet dictum sit amet justo donec enim diam vulputate ut. Vitae auctor eu augue ut lectus. Nunc lobortis mattis aliquam faucibus purus.</p>
      </div>
    );
  }
}
