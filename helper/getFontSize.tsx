export const getFontSize = (value: number) => {
  switch (value) {
    case 0:
      return "xs";
    case 1:
      return "sm";
    case 2:
      return "md";
    case 3:
      return "lg";
    case 4:
      return "xl";
    default:
      return "md";
  }
};
export default getFontSize;
