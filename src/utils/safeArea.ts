import { StyleSheet, Platform, StatusBar } from "react-native";

export const safeArea = StyleSheet.create({
  style: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
