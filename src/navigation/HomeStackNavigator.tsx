import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NHKGuideList } from "../components/pages/NHKGuideList";
import { NHKGuideDetails } from "../components/pages/NHKGuideDetails";
import { RootStackParamList } from "../types/navigation";

const Stack = createStackNavigator<RootStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="GuideList">
      <Stack.Screen name="GuideList" component={NHKGuideList} />
      <Stack.Screen name="GuideDetails" component={NHKGuideDetails} />
    </Stack.Navigator>
  );
};
