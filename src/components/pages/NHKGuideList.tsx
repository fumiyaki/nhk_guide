import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { GuideList } from "../organisms/GuideList";
import { Guide } from "../../types/guide";
import { getNHKGuideListData } from "../../api/repository/nhk_guide_repository";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigation";

const area = "130";
const service = "g1";
const date = "2021-01-23";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "GuideList">;
};

export const NHKGuideList: React.FC<Props> = ({ navigation }) => {
  const [guideList, setGuideList] = useState<Guide[] | undefined>();
  const onPressGuide = (guide: Guide) => {
    navigation.navigate("GuideDetails", { guide });
  };
  useEffect(() => {
    const getListData = async () => {
      const data = await getNHKGuideListData(area, service, date);
      setGuideList(data);
    };
    getListData();
  }, []);

  return (
    <SafeAreaView>
      <GuideList guideList={guideList} onPress={onPressGuide} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
