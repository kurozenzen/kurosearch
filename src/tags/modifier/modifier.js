/**
 * @typedef {"+" | "-" | "~"} Modifier
 */

const VALID_MODIFIERS = Object.freeze(["+", "-", "~"]);
export const isValidModifier = (value) => {
  return VALID_MODIFIERS.includes(value);
};

const SERIALIZED_MODIFIERS = Object.freeze({
  "+": "",
  "-": "-",
  "~": "",
});
export const serializeModifier = (value) => {
  if (!isValidModifier(value)) {
    throw TypeError("Invalid modifier passed to serializeModifier");
  }

  return SERIALIZED_MODIFIERS[value];
};
