import { View, StyleSheet, Text, Image } from "react-native";
import LoadingIndicator from "./LoadingIndicator";
import EmptyPlaceholder from "./EmptyPlaceholder";
import { FullDataType } from "../api/getAllDatas";
import { convertMonth } from "../helper/getDates";
import { ReactNode } from "react";
import { SvgXml } from "react-native-svg";

const ChevronLeft = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 18L9 12L15 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const ChevronRight = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
interface HomeContentProps {
  isLoading: boolean;
  datas: FullDataType[];
  currentDate: { year: number; month: number };
  children: ReactNode;
}

const HomeContent = (props: HomeContentProps) => {
  const { isLoading, datas, currentDate, children } = props;

  const month = convertMonth(currentDate.month);
  const year = currentDate.year;

  return (
    <View>
      {isLoading ? (
        <LoadingIndicator />
      ) : !isLoading && datas?.length === 0 ? (
        <EmptyPlaceholder />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <SvgXml xml={ChevronLeft} width={24} height={24} />
            <Text>
              {month} {year}
            </Text>
            <SvgXml xml={ChevronRight} width={24} height={24} />
          </View>
          {children}
        </View>
      )}
    </View>
  );
};

export default HomeContent;

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 80,
  },
});
