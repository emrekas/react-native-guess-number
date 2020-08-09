import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BodyText = (props: { children?: any; style?: any }) => {
  return (
    <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
  );
};

export default BodyText;

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans",
  },
});
