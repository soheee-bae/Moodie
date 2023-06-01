import React, { useContext, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import BasicNav from "../components/BasicNav";
import AddButton from "../components/AddButton";
import MoodsList from "../components/MoodsList";
import ViewContext from "../contexts/ViewContext";
import ThemeContext from "../contexts/ThemeContext";
import FontContext from "../contexts/FontContext";

interface AddCoverProps {
  navigation: any;
}

const AddCover = (props: AddCoverProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();

  const { view } = useContext(ViewContext);
  const { background, isEng } = useContext(ThemeContext);
  const { fontSizePx, fontStyle } = useContext(FontContext);

  const text = isEng ? "How was your day?" : "오늘 하루는 어땠나요?";

  return (
    <Animated.View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        styles(background).addCover,
      ]}>
      <View style={styles(background).content}>
        <Text
          style={[
            {
              fontFamily: fontStyle,
              fontSize: fontSizePx,
            },
            styles(background).text,
          ]}>
          {text}
        </Text>
        <View style={styles(background).moodList}>
          <MoodsList navigation={navigation} />
        </View>
      </View>
      <BasicNav
        content={<AddButton onPress={() => navigation.navigate(view)} />}
      />
    </Animated.View>
  );
};

export default AddCover;

const styles = (background: string) =>
  StyleSheet.create({
    addCover: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "flex-end",
      backgroundColor: background,
    },
    content: { flex: 0.5 },
    text: {
      flex: 0.3,
      textAlign: "center",
    },
    moodList: {
      flex: 4,
    },
  });
