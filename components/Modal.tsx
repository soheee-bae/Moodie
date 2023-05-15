import React, { ReactNode, useContext, useState } from "react";
import { StyleSheet, View, Modal, Text, Pressable } from "react-native";
import { IconButton } from "@react-native-material/core";
import { Entypo } from "@expo/vector-icons";

import { theme } from "../styles/theme";
import ThemeContext from "../contexts/ThemeContext";
import FontContext from "../contexts/FontContext";

interface ModalCompProps {
  onPress: () => void;
  content: ReactNode;
  trigger: ReactNode;
}

const ModalComp = (props: ModalCompProps) => {
  const { onPress, content, trigger } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const handleLeave = () => {
    setModalVisible(!modalVisible);
    onPress();
  };

  const handleCancel = () => {
    setModalVisible(!modalVisible);
  };

  const handleOpen = () => {
    setModalVisible(true);
  };

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
              {content}
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
      <Pressable onPress={handleOpen}>{trigger}</Pressable>
    </>
  );
};

export default ModalComp;

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
