import React, { useContext, useState } from "react";
import { StyleSheet, View, Modal, Text } from "react-native";
import { IconButton } from "@react-native-material/core";
import { Entypo } from "@expo/vector-icons";

import { theme } from "../styles/theme";
import ThemeContext from "../contexts/ThemeContext";
import FontContext from "../contexts/FontContext";

interface HightlightModalProps {
  onPress: () => void;
}

const HightlightModal = (props: HightlightModalProps) => {
  const { onPress } = props;

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <View>
              <View style={styles.textContent}>
                <Text
                  style={[
                    { fontFamily: fontStyle, fontSize: fontSizePx },
                    styles.text,
                  ]}>
                  {text1}
                </Text>
                <Text
                  style={[
                    { fontFamily: fontStyle, fontSize: fontSizePx },
                    styles.text,
                  ]}>
                  {text2}
                </Text>
              </View>
              <View style={styles.buttonContent}>
                <IconButton
                  icon={
                    <Entypo
                      name="cross"
                      size={20}
                      color={theme.colors.lightBlack}
                    />
                  }
                  onPress={handleCancel}
                  color={theme.colors.background}
                />
                <IconButton
                  icon={
                    <Entypo
                      name="check"
                      size={20}
                      color={theme.colors.lightBlack}
                    />
                  }
                  onPress={handleLeave}
                  color={theme.colors.background}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <IconButton
        icon={<Entypo name="cross" size={20} color={theme.colors.lightBlack} />}
        onPress={() => setModalVisible(true)}
        color={theme.colors.background}
      />
    </>
  );
};

export default HightlightModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalContainer: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    textAlign: "center",
    lineHeight: 25,
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
});
