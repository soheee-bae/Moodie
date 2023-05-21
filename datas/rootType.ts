import { MoodsData } from "./moods";

export type RootStackParamList = {
  HomeCalendar: undefined;
  HomeList: undefined;
  Settings: undefined;
  Search: undefined;
  AddCover: undefined;
  AddMood: {
    initialDate: number;
    initialMood: MoodsData;
  };
  BackgroundSetting: undefined;
  LanguageSetting: undefined;
  FontSetting: undefined;
};
