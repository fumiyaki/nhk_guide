import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { GuideDetails } from "../../types/guide";
import layout from "../../constants/Layout";
import { calcAirtime, formatAirtime, chooseURL } from "../../utils/index";
import Hyperlink from "react-native-hyperlink";

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

  const subtitle = guideDetail.subtitle;
  const content = guideDetail.content === "" ? "内容未定" : guideDetail.content;
  const start_time = formatAirtime(
    guideDetail.start_time,
    guideDetail.end_time
  );
  const act = guideDetail.act;
  const airTime = calcAirtime(guideDetail.start_time, guideDetail.end_time);
  const homepage = "http:" + guideDetail.program_url;

  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{
            uri: chooseURL(guideDetail),
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

      {homepage !== "" && (
        <View style={styles.contents_container}>
          <Hyperlink
            linkDefault={true}
            linkStyle={{ color: "#2980b9", fontWeight: "bold" }}
          >
            <Text style={styles.label}>公式サイト</Text>
            <Text style={styles.contents}>{homepage}</Text>
          </Hyperlink>
        </View>
      )}
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
