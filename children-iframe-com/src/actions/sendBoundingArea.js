import { sendMessageToParent } from '../helpers';

export default event => {
  const { width, height } = event.target.document ?
    event.target.document.documentElement.getBoundingClientRect()
    : event.target.documentElement.getBoundingClientRect();

  sendMessageToParent({
    event_type: 'resize',
    width,
    height,
  })
};