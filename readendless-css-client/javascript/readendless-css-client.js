function removeAllChildren(container) {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}
