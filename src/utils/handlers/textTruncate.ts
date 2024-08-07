export const textTruncateHandler = (
  str: string | undefined,
  length: number
) => {
  if (!str) {
    return "texto no definido!";
  }
  if (str.length <= length) {
    return str;
  }
  return str.substring(0, length) + "...";
};
