export const convertToNull = (item) => (item === "null" ? null : item);

export const filteredToken = (token) => {
  if (!token) return;

  return token
    .split("")
    .filter((e) => e !== '"')
    .join("");
};
