export const convertToNull = (item) => (item === "null" ? null : item);

export const filteredToken = (token) =>
  token
    .split("")
    .filter((e) => e !== '"')
    .join("");
