import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const getDates = (dateData: Date) => {
  const year = dateData.getFullYear();
  const month = convertMonth(dateData.getMonth());
  const day = convertDay(dateData.getDay());
  const dates = dateData.getDate();

  const hours = dateData.getHours();
  const minutes = dateData.getMinutes();
  const hour = hours > 12 ? hours - 12 : hours;
  const minute = minutes < 10 ? `0${minutes}` : `${minutes}`;

  const ampm = hours > 11 ? "PM" : "AM";
  return { year, month, day, dates, hour, minute, ampm };
};
export default getDates;

export function convertMonth(month: number) {
  switch (month) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
    default:
      return "Jan";
  }
}

function convertDay(day: number) {
  const { isEng } = useContext(ThemeContext);

  switch (day) {
    case 0:
      return isEng ? "Sun" : "일요일";
    case 1:
      return isEng ? "Mon" : "월요일";
    case 2:
      return isEng ? "Tues " : "화요일";
    case 3:
      return isEng ? "Wed" : "수요일";
    case 4:
      return isEng ? "Thurs" : "목요일";
    case 5:
      return isEng ? "Fri" : "금요일";
    case 6:
      return isEng ? "Sat" : "토요일";
    default:
      return isEng ? "Sun" : "일요일";
  }
}
