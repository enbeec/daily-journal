export const dispatchStateChanged = () => {
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const dispatch = (eventString) => {
  document.dispatchEvent(new CustomEvent(eventString));
};
