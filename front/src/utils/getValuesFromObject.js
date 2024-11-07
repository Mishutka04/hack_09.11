export const getValuesFromObject = (object) => {
  const elements = [];
  for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
          const element = object[key];
          elements.push(element);
      }
  }

  return elements;
}