import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { GuideList } from "./src/components/organisms/GuideList";
import { Guide } from "./src/types/guide";
import { getNHKGuideListData } from "./src/api/repository/nhk_guide_repository";

const area = "130";
const service = "g1";
const date = "2021-01-23";

export default function App() {
  const [guideList, setGuideList] = useState<Guide[] | undefined>();
  useEffect(() => {
    getListData();
  }, []);

  const getListData = async () => {
    const data = await getNHKGuideListData(area, service, date);
    setGuideList(data);
  };

  return (
    <SafeAreaView>
      <GuideList guideList={guideList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
