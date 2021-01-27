import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStackNavigator } from "./HomeStackNavigator";
import { FirstLaunch } from "../components/pages/FirstLaunch";
import { SettingContext } from "../contexts/settingContext";

export const AppNavigator = () => {
  const { setting } = useContext(SettingContext);
  return (
    <NavigationContainer>
      {!setting ? <FirstLaunch /> : <HomeStackNavigator />}
    </NavigationContainer>
  );
};
