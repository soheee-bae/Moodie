import React, { Dispatch, SetStateAction, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Snackbar } from "@react-native-material/core";

interface SnackbarCompProps {
  label: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SnackbarComp = (props: SnackbarCompProps) => {
  const { label, open, setOpen } = props;

  useEffect(() => {
    if (open)
      setTimeout(() => {
        setOpen(false);
      }, 2000);
  }, [open]);

  return (
    <View>
      {open ? (
        <Snackbar
          message={label}
          style={{
            position: "absolute",
            zIndex: 999,
            end: 20,
            start: 20,
            bottom: 10,
          }}
        />
      ) : null}
    </View>
  );
};
export default SnackbarComp;

const styles = StyleSheet.create({});
