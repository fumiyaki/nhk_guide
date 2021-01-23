import React from "react";
import { SafeAreaView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigation";
import { RouteProp } from "@react-navigation/native";
import { GuideDetails } from "../templates/GuideDetails";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "GuideDetails">;
  route: RouteProp<RootStackParamList, "GuideDetails">;
};

export const NHKGuideDetails: React.FC<Props> = ({ navigation, route }) => {
  const { guide } = route.params;
  return (
    <SafeAreaView>
      <GuideDetails guide={guide}></GuideDetails>
    </SafeAreaView>
  );
};
