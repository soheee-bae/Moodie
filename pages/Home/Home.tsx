import React from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// import styles from './Home.module.css'

const Home = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,

        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <Text>This is top text.</Text>
      <Text>This is bottom text.</Text>
    </View>
  );
};

export default Home;
