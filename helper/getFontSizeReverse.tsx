export const getFontSizeReverse = (value: string) => {
  switch (value) {
    case "xs":
      return 0;
    case "sm":
      return 1;
    case "md":
      return 2;
    case "lg":
      return 3;
    case "xl":
      return 4;
    default:
      return 2;
  }
};
export default getFontSizeReverse;
