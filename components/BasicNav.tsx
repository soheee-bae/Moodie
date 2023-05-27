import React, { ReactNode, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { IconButton } from "@react-native-material/core";

import FontContext from "../contexts/FontContext";
import { theme } from "../styles/theme";
import ThemeContext from "../contexts/ThemeContext";

interface BasicNavProps {
  firstIcon?: ReactNode;
  lastIcon?: ReactNode;
  content?: string | ReactNode;
  firstPress?: () => void;
  lastPress?: () => void;
}

const BasicNav = (props: BasicNavProps) => {
  const { firstIcon, lastIcon, content, firstPress, lastPress } = props;
  const { fontSizePx, fontStyle } = useContext(FontContext);
  const { background } = useContext(ThemeContext);

  return (
    <View style={styles.header}>
      <IconButton icon={firstIcon} onPress={firstPress} color={background} />
      <Text style={{ fontFamily: fontStyle, fontSize: fontSizePx }}>
        {content}
      </Text>
      <IconButton icon={lastIcon} onPress={lastPress} color={background} />
    </View>
  );
};

export default BasicNav;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    flex: 0.06,
  },
});
