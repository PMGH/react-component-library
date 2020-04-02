export const currentTime = () => {
  const now = new Date();
  return now.toUTCString();
}

export const randomColor = () => {
  const colorCode = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + colorCode;
}

export const scrollToBottomOf = (element) => {
  element.scrollTop = element.scrollHeight
}

export const clearValue = (element) => {
  element.value = null;
}

export const emitMessage = (emitter, message) => {
  emitter && emitter.emit('newMessage', message);
}
