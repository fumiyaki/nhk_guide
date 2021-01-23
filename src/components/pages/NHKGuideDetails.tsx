import React from "react";
import { Text, SafeAreaView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigation";
import { RouteProp } from "@react-navigation/native";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "GuideDetails">;
  route: RouteProp<RootStackParamList, "GuideDetails">;
};

export const NHKGuideDetails: React.FC<Props> = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <Text>Guide Detail</Text>
    </SafeAreaView>
  );
};
