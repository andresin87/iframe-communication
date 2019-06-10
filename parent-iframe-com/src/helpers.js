// Send a message to the child iframe
export const sendMessageToChildren = (iframeEl, { event_type, ...otherAttributes }) => {
  // Make sure you are sending a string, and to stringify JSON
  debugger
  iframeEl.contentWindow.postMessage({ event_type, ...otherAttributes }, '*');
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
