/** @param {string} tagname */
export function formatTagname(tagname) {
  return tagname
    .replace(/_/g, " ")
    .replace(/source:/g, "")
    .replace(/rating:/g, "");
}

/** @param {import("../types/Tag").TagType[]} types */
export function selectType(types) {
  for (const type of types) {
    if (type !== "ambiguous" && type !== "general") {
      return type;
    }
  }

  return null;
}
