import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { GuideDetails } from "../../types/guide";
import layout from "../../constants/Layout";
import { calcAirtime, formatAirtime } from "../../utils/index";

const displayHeight = layout.window.height;

type Props = {
  guideDetail: GuideDetails | undefined;
};

export const GuideDetailsTemplate: React.FC<Props> = ({
  guideDetail,
}: Props) => {
  if (guideDetail === undefined) {
    return <Text>問題が発生しました。</Text>;
  }
  const title = guideDetail.title;
  const url = "http:" + guideDetail.service.logo_l.url;
  const subtitle = guideDetail.subtitle;
  const content = guideDetail.content === "" ? "内容未定" : guideDetail.content;
  const start_time = formatAirtime(
    guideDetail.start_time,
    guideDetail.end_time
  );
  const act = guideDetail.act;
  const airTime = calcAirtime(guideDetail.start_time, guideDetail.end_time);

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
