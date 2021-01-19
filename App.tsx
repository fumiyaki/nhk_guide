import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { GuideCard } from "./src/components/molecules/GuideCard";
import { mockGuideData } from "./src/utils/mockData";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GuideCard guide={mockGuideData} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { margin: 5 },
});
