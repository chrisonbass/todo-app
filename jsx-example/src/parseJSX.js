
/**
 * Creates DOM elements (can be used to replace React as a JSX parser)
 * @param type
 * @param props
 * @param children
 * @returns {*}
 */
export default (type, props = {}, ...children) => {
  // Custom Component handler
  if (typeof type === "function"){
    return type({
      ...props,
      children
    });
  }
  // listeners that start with `on` need
  // to be all lowercase
  let parsedProps = {...props};
  Object.keys(parsedProps).forEach((key) => {
    if (key.match(/^on[A-Z]/)){
      parsedProps[key.toLowerCase()] = parsedProps[key];
      delete parsedProps[key];
    }
  })
  // Assign parsed props to newly created element
  const element = Object.assign(document.createElement(type), parsedProps);
  for (const child of children) {
    let childNode = ["string", "number"].indexOf(typeof child) >= 0 ?
      document.createTextNode(child) : child;
    if (Array.isArray(childNode)){
      element.append(...childNode);
    } else {
      element.append(childNode);
    }
  }
  return element;
};
