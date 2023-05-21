import React, { useEffect } from "react";
import { View } from "react-native";
import { Snackbar } from "@react-native-material/core";

interface SnackbarCompProps {
  label: string;
  open: boolean;
}

const SnackbarComp = (props: SnackbarCompProps) => {
  const { label, open, setOpen } = props;

  useEffect(() => {setOpen;}, [open]);
  return (
    <View>
      {open ? (
        <Snackbar
          message={label}
          style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
        />
      ) : null}
    </View>
  );
};
export default SnackbarComp;
