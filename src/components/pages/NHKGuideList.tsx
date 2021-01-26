import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { GuideList } from "../organisms/GuideList";
import { Guide } from "../../types/guide";
import { getNHKGuideListData } from "../../api/repository/nhk_guide_repository";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigation";
import dayjs from "dayjs";
import { safeArea } from "../../utils/safeArea";
import { makeMarker } from "../../utils/index";

const area = "130";
const service = "g1";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "GuideList">;
};

export const NHKGuideList: React.FC<Props> = ({ navigation }) => {
  const [guideList, setGuideList] = useState<Guide[] | undefined>();
  const [recommendedGuide, setRecommendedGuide] = useState<Guide | undefined>();
  const onPressGuide = (guide: Guide) => {
    navigation.navigate("GuideDetails", { guideId: guide.id });
  };

  useEffect(() => {
    const today = dayjs().format("YYYY-MM-DD");
    const getListData = async () => {
      const data = await getNHKGuideListData(area, service, today);
      if (data !== undefined) {
        const titleIsMarker: Guide = makeMarker();
        data.guideList.unshift(titleIsMarker);
        setGuideList(data.guideList);
        setRecommendedGuide(data.recommendedGuide);
      } else {
        setGuideList(undefined);
        setRecommendedGuide(undefined);
      }
    };
    getListData();
  }, []);

  return (
    <SafeAreaView style={safeArea.style}>
      <StatusBar style="auto" />
      <GuideList
        recommendedGuide={recommendedGuide}
        guideList={guideList}
        onPress={onPressGuide}
      />
    </SafeAreaView>
  );
};
