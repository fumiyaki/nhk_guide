import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { mockGuideListData } from "./src/utils/mockData";
import { GuideList } from "./src/components/organisms/GuideList";

export default function App() {
  return (
    <SafeAreaView>
      <GuideList guideList={mockGuideListData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
