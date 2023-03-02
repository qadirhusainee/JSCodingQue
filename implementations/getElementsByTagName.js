Element.prototype.getElementsByTagName = function(tagName) {
  const elements = [];

  function traverse(node) {
    if (node.tagName === tagName.toUpperCase()) {
      elements.push(node);
    }

    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i]);
    }
  }

  traverse(this);

  return elements;
};
