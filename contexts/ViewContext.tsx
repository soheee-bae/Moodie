import { ReactNode, createContext, useState } from "react";

export type ViewContextContent = {
  view: string;
  setView: (view: string) => void;
};

const ViewContext = createContext<ViewContextContent>({
  view: "",
  setView: (view: string) => undefined,
});

interface ViewContextProps {
  children: ReactNode;
}

function ViewContextProvider(props: ViewContextProps) {
  const { children } = props;

  //HomeCalendar
  //HomeList
  const [view, setView] = useState("HomeCalendar");

  return (
    <ViewContext.Provider
      value={{
        view,
        setView,
      }}>
      {children}
    </ViewContext.Provider>
  );
}

export default ViewContext;
export { ViewContextProvider };
