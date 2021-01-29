import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { AREA, SERVICE } from "../../constants/AppService";
import { Button } from "../atoms/Button";
import { Platform } from "react-native";

type Props = {
  title: string;
  area: string;
  service: string;
  onChangeArea: (text: string) => void;
  onChangeService: (text: string) => void;
  onSubmit: () => void;
};

export const Form: React.FC<Props> = ({
  title,
  area,
  service,
  onChangeArea,
  onChangeService,
  onSubmit,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.area_container}>
        <Text style={styles.label}>エリア</Text>
        <DropDownPicker
          items={SERVICE}
          defaultValue={area}
          placeholder="エリアを選択してください"
          containerStyle={{ height: 40 }}
          style={{ backgroundColor: "#fafafa" }}
          itemStyle={{ justifyContent: "flex-start" }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
          labelStyle={{ color: "#000" }}
          onChangeItem={(item) => onChangeArea(item.value)}
        />
      </View>

      <View style={styles.service_container}>
        <Text style={styles.label}>サービス</Text>
        <DropDownPicker
          items={AREA}
          defaultValue={service}
          placeholder="サービスを選択してください"
          containerStyle={{ height: 40 }}
          style={{ backgroundColor: "#fafafa" }}
          itemStyle={{ justifyContent: "flex-start" }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
          labelStyle={{ color: "#000" }}
          onChangeItem={(item) => onChangeService(item.value)}
        />
      </View>

      <Button onPress={onSubmit} text="保存する" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    margin: 50,
  },
  area_container: {
    marginBottom: 50,
    ...(Platform.OS !== "android" && {
      zIndex: 50,
    }),
  },
  service_container: {
    marginBottom: 60,
    ...(Platform.OS !== "android" && {
      zIndex: 10,
    }),
  },
  label: {
    fontWeight: "bold",
    color: "#999",
    marginBottom: 10,
  },
});
