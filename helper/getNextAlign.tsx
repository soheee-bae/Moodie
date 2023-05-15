import { KeyboardAlignData, keyboardAlign } from "../datas/keyboardTools";

export const getNextAlign = (alignment: KeyboardAlignData) => {
  const currentIndex = keyboardAlign.findIndex(
    (align) => align.alignItem === alignment.alignItem
  );

  return currentIndex === 2
    ? keyboardAlign[0]
    : keyboardAlign[currentIndex + 1];
};
export default getNextAlign;
