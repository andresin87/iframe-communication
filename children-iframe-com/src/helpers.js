// Send a message to parent
export const sendMessageToParent = msgObj => {
  // Make sure you are sending a string, and to stringify JSON
  debugger;
  window.parent.postMessage(msgObj, '*');
};

// addEventListener support for IE8
export const bindEvent = (element, eventName, eventHandler) => {
  if (element.addEventListener) {
    element.addEventListener(eventName, eventHandler, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + eventName, eventHandler);
  }
};

// removeEventListener support for IE8
export const unbindEvent = (element, eventName, eventHandler) => {
  if (element.addEventListener) {
    element.removeEventListener(eventName, eventHandler, false);
  } else if (element.attachEvent) {
    element.detachEvent('on' + eventName, eventHandler);
  }
};
