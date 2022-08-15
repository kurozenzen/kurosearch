export const isValidName = (value) => {
  return typeof value === "string" && value !== "";
}

export const isValidCount = (value) => {
  return typeof value === "number" && value >= 0;
}