import { createContext } from "react";
import { Setting } from "../types/setting";

type SettingContextValue = {
  setting: Setting | null;
  setSetting: (setting: Setting | null) => void;
};

export const SettingContext = createContext<SettingContextValue>({
  setting: null,
  setSetting: () => {},
});
