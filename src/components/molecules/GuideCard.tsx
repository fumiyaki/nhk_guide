import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { formatAirtime } from "../../utils";
import layout from "../../constants/Layout";
import { Guide } from "../../types/guide";

const displayWidth = layout.window.width;
const IMAGE_WIDTH = displayWidth / 3;
type Props = {
  guide: Guide;
};

export const GuideCard: React.FC<Props> = ({ guide }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{
            uri: "http:" + guide.service.logo_m.url,
          }}
        />
      </View>
      <View style={styles.info_container}>
        <View>
          <Text style={styles.title} numberOfLines={1}>
            {guide.title}
          </Text>
          <Text style={styles.content} numberOfLines={2}>
            {guide.content}
          </Text>
        </View>
        <Text style={styles.airtime}>{formatAirtime(guide.start_time)}</Text>
      </View>
    </TouchableOpacity>
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
    height: IMAGE_WIDTH * 0.7,
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
