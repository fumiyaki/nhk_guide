import React, { useState, useEffect, useContext } from "react";
import { Alert, SafeAreaView } from "react-native";
import { safeArea } from "../../utils/safeArea";
import { SettingContext } from "../../contexts/settingContext";
import { loadSetting, saveSetting } from "../../infra/storage/setting";
import { Setting } from "../../types/setting";
import { Form } from "../organisms/Form";
import { Loading } from "../atoms/Loading";

export const FirstLaunch: React.FC = () => {
  const { setSetting } = useContext(SettingContext);
  const [area, setArea] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const initialLoadSetting = async () => {
      const data: Setting = await loadSetting();
      console.log("保存したdataは", data);

      setSetting(data);
    };
    initialLoadSetting();
  }, []);

  const onSubmit = async () => {
    if (area === "") {
      Alert.alert("エリアがセットしてください");
    } else if (service === "") {
      Alert.alert("サービスをセットしてください");
    } else {
      setLoading(true);
      await saveSetting({ area, service });
      setSetting({ area, service });
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={safeArea.style}>
      <Form
        title="初期設定"
        area={area}
        service={service}
        onChangeArea={(area: string) => setArea(area)}
        onChangeService={(service: string) => setService(service)}
        onSubmit={onSubmit}
      />
      <Loading visible={loading} />
    </SafeAreaView>
  );
};
