import { sendMessageToChildren } from '../helpers';

// Send a message to the children
export default (iframe, e) => {
  const random = Math.random();
  debugger;
  sendMessageToChildren(iframe, {event_type: 'communication', number: '' + random});
};