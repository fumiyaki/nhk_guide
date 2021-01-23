import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { Guide } from "../../../src/types/guide";
import layout from "../../constants/Layout";
import { calcAirtime, formatAirtime } from "../../utils/index";

const displayHeight = layout.window.height;

type Props = {
  guide: Guide;
};

export const GuideDetails: React.FC<Props> = ({ guide }: Props) => {
  const title = guide.title;
  const url = "http:" + guide.service.logo_l.url;
  const subtitle = guide.subtitle;
  const content = guide.content === "" ? "内容未定" : guide.content;
  const start_time = formatAirtime(guide.start_time, guide.end_time);
  const act = guide.act;
  const airTime = calcAirtime(guide.start_time, guide.end_time);

  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{
            uri: url,
          }}
        ></Image>
      </View>

      <View style={styles.contents_container}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.contents_container}>
        <Text>{start_time}</Text>
      </View>

      {subtitle !== "" && (
        <View style={styles.contents_container}>
          <Text style={styles.label}>概要</Text>
          <Text style={styles.contents}>{subtitle}</Text>
        </View>
      )}

      <View style={styles.contents_container}>
        <Text style={styles.label}>番組内容</Text>
        <Text style={styles.contents}>{content}</Text>
      </View>

      {act !== "" && (
        <View style={styles.contents_container}>
          <Text style={styles.label}>出演者</Text>
          <Text>{act}</Text>
        </View>
      )}

      <View style={styles.contents_container}>
        <Text style={styles.label}>内容時間</Text>
        <Text style={styles.contents}>{airTime}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image_container: {
    width: "100%",
    height: displayHeight * 0.4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  contents_container: {
    margin: 10,
  },
  contents: {
    letterSpacing: 1,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
