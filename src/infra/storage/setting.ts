import Storage from "react-native-storage";
import AsyncStorage from "@react-native-community/async-storage";
import { Setting, SETTING } from "../../types/setting";

const setting = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  enableCache: true,
});

export const loadSetting = async (): Promise<Setting> => {
  const localSetting: Setting = await setting.load({
    key: SETTING,
  });
  return localSetting;
};

export const saveSetting = async (settingValue: Setting) => {
  await setting.save({
    key: SETTING,
    data: settingValue,
  });
};

export default setting;
