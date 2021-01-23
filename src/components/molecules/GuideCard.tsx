import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { formatAirtime } from "../../utils";
import layout from "../../constants/Layout";
import { Guide } from "../../types/guide";

const displayWidth = layout.window.width;

type Props = {
  guide: Guide;
};

export const GuideCard: React.FC<Props> = ({ guide }: Props) => {
  const title = guide.title;
  const url = "http:" + guide.service.logo_m.url;
  const content = guide.content === "" ? "内容未定" : guide.content;
  const startTime = formatAirtime(guide.start_time, guide.end_time);

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{
            uri: url,
          }}
          testID={`guide_image_component`}
        />
      </View>
      <View style={styles.info_container}>
        <View>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.content} numberOfLines={2}>
            {content}
          </Text>
        </View>
        <Text style={styles.airtime}>{startTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  image_container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: displayWidth / 4,
  },
  info_container: {
    flex: 2,
    justifyContent: "space-between",
    marginLeft: 8,
    paddingTop: 5,
    paddingBottom: 5,
  },
  title: {
    fontSize: 20,
  },
  content: {
    marginTop: 5,
    fontSize: 12,
  },
  airtime: {
    fontSize: 10,
    justifyContent: "flex-end",
  },
});
