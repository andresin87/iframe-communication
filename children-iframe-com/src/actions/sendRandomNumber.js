import { sendMessageToParent } from '../helpers';

// Send a message to the parent
export default e => {
  const random = Math.random();
  sendMessageToParent({event_type: 'communication', number: '' + random});
};