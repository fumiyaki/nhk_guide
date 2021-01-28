import React, { useState, useEffect, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { RootStackParamList } from "../../types/navigation";
import { RouteProp } from "@react-navigation/native";
import { GuideDetailsTemplate } from "../templates/GuideDetailsTemplate";
import { getNHKGuideData } from "../../infra/api/repository/nhk_guide_repository";
import { GuideDetails } from "../../types/guide";
import { safeArea } from "../../utils/safeArea";
import { SettingContext } from "../../contexts/settingContext";

type Props = {
  route: RouteProp<RootStackParamList, "GuideDetails">;
};

export const NHKGuideDetails: React.FC<Props> = ({ route }) => {
  const { setting } = useContext(SettingContext);
  const { guideId } = route.params;
  const [guideDetails, setGuide] = useState<GuideDetails | undefined>();
  useEffect(() => {
    const getData = async () => {
      const data = await getNHKGuideData(
        setting?.area,
        setting?.service,
        guideId
      );
      setGuide(data);
    };
    getData();
  }, []);
  return (
    <SafeAreaView style={safeArea.style}>
      <StatusBar style="auto" />
      <GuideDetailsTemplate guideDetail={guideDetails}></GuideDetailsTemplate>
    </SafeAreaView>
  );
};
