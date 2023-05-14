import { Moods, MoodsData } from "../datas/moods";

export const getNextMood = (mood: MoodsData) => {
  const currentIndex = Moods.findIndex((m) => m.engLabel === mood.engLabel);

  return currentIndex === 8 ? Moods[0] : Moods[currentIndex + 1];
};
export default getNextMood;
