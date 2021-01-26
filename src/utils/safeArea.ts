import { StyleSheet, Platform, StatusBar } from "react-native";
import layout from "../constants/Layout";

export const safeArea = StyleSheet.create({
  style: {
    width: layout.window.width,
    height: layout.window.height,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
