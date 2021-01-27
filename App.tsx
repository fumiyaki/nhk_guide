import React, { useState } from "react";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { SettingContext } from "./src/contexts/settingContext";
import { Setting } from "./src/types/setting";

export default function App() {
  const [setting, setSetting] = useState<Setting | null>(null);
  return (
    <SettingContext.Provider value={{ setting, setSetting }}>
      <AppNavigator />
    </SettingContext.Provider>
  );
}
