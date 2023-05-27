import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { FullDataType, getAllDatas } from "../api/getAllDatas";
import { getSortedDatasbyDate } from "../helper/getSortedDatasbyDate";
import { DataType } from "../hooks/uploadData";

export type DataContextContent = {
  datas: FullDataType[];
  setDatas: Dispatch<SetStateAction<FullDataType[]>>;
  currentData: FullDataType | null;
  setCurrentData: Dispatch<SetStateAction<FullDataType | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  currentDate: { year: number; month: number };
  setCurrentDate: Dispatch<SetStateAction<{ year: number; month: number }>>;
};

const DataContext = createContext<DataContextContent>({
  datas: [],
  setDatas: () => undefined,
  currentData: null,
  setCurrentData: () => undefined,
  isLoading: false,
  setIsLoading: () => undefined,
  currentDate: { year: 0, month: 0 },
  setCurrentDate: () => undefined,
});

interface DataContextProps {
  children: ReactNode;
}

function DataContextProvider(props: DataContextProps) {
  const { children } = props;

  const [datas, setDatas] = useState<FullDataType[]>([]);
  const [currentData, setCurrentData] = useState<FullDataType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [currentDate, setCurrentDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(), //MAy -> 4
  });

  async function getDatas() {
    const data = (await getAllDatas()) as DataType[];
    const sortedData = await getSortedDatasbyDate(data);

    const currentData = sortedData.find((data: FullDataType) => {
      const year = parseInt(data.newDate.slice(0, 4));
      const month = parseInt(data.newDate.slice(-2));
      return year === currentDate.year && month === currentDate.month + 1;
    });

    setIsLoading(false);
    setCurrentData(currentData);
    setDatas(sortedData);
  }

  useEffect(() => {
    getDatas();
  }, [currentDate]);

  return (
    <DataContext.Provider
      value={{
        datas,
        setDatas,
        currentData,
        setCurrentData,
        isLoading,
        setIsLoading,
        currentDate,
        setCurrentDate,
      }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
export { DataContextProvider };
