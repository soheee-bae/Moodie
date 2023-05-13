import React, { useContext, useState } from "react";
import { StyleSheet, View, Modal, Text, Pressable } from "react-native";
import { IconButton } from "@react-native-material/core";
import { Entypo } from "@expo/vector-icons";

import { theme } from "../styles/theme";
import ThemeContext from "../contexts/ThemeContext";

interface CloseModalProps {
  onPress: () => void;
}

const CloseModal = (props: CloseModalProps) => {
  const { onPress } = props;

  const [modalVisible, setModalVisible] = useState(false);

  const { isEng } = useContext(ThemeContext);

  const text1 = isEng
    ? "Your changes won't be saved.  "
    : "작성한 내용이 저장되지 않아요.";
  const text2 = isEng
    ? "Do you still want to leave the page?"
    : " 화면을 닫을까요?";

  const handleLeave = () => {
    setModalVisible(!modalVisible);
    onPress();
  };

  const handleCancel = () => {
    setModalVisible(!modalVisible);
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
              <View style={styles.textContent}>
                <Text style={styles.text}>{text1}</Text>
                <Text style={styles.text}>{text2}</Text>
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

export default CloseModal;

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
