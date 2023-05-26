import { DataType } from "../hooks/uploadData";

export const getSortedDatasbyDate = async (datas: DataType[]) => {
  const sortedData = datas.sort((a, b) => {
    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
  });
  const result: any = [];

  sortedData.forEach((data, idx) => {
    const year = new Date(data.date).getFullYear();
    const month = new Date(data.date).getMonth() + 1;
    const newMonth = month < 10 ? `0${month}` : `${month}`;
    const dateKey = `${year}${newMonth}`;
    if (idx === 0) {
      result.push({
        newDate: dateKey,
        data: [data],
      });
    } else {
      const existing = result.findIndex((d: any) => d.newDate === dateKey);
      if (existing === -1) {
        result.push({
          newDate: dateKey,
          data: [data],
        });
      } else {
        result[existing] = {
          newDate: dateKey,
          data: [...result[existing].data, data],
        };
      }
    }
  });
  return result;
};
