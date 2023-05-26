import { FullDataType } from "../api/getAllDatas";
import { DataType } from "../hooks/uploadData";
import { getDaysInMonth } from "./getDaysInMonth";

export const getUpdatedMoodList = async (
  data: FullDataType,
  currentDate: { year: number; month: number }
) => {
  const moods = data.data;
  const dates = getDaysInMonth(currentDate.year, currentDate.month);
  const newArr = new Array(dates).fill(null);

  const calendarList = newArr.map((_, index) => {
    let emotion = moods.find(
      (mood: DataType) => new Date(mood.date).getDate() === index + 1
    );
    return emotion ? emotion : null;
  });

  console.log("calendarList");
  console.log(calendarList);
  return calendarList;
};
