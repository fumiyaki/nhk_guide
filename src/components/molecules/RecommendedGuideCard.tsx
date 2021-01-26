import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { formatAirtime, truncate } from "../../utils";
import layout from "../../constants/Layout";
import { GuideDetails } from "../../types/guide";
import { getNHKGuideData } from "../../api/repository/nhk_guide_repository";
import { chooseURL } from "../../utils/index";

const displayHeight = layout.window.height;
const displayWidth = layout.window.width;

const area = "130";
const service = "g1";

type Props = {
  guideId: string;
};

export const RecommendedGuideCard: React.FC<Props> = ({ guideId }: Props) => {
  const [guideDetails, setGuideDetails] = useState<GuideDetails | undefined>();
  useEffect(() => {
    const getData = async () => {
      const data = await getNHKGuideData(area, service, guideId);
      setGuideDetails(data);
    };
    getData();
  }, []);

  return guideDetails === undefined ? (
    <View></View>
  ) : (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: chooseURL(guideDetails) }}
        style={styles.image}
      >
        <View style={styles.guide_info}>
          <Text style={[styles.text, styles.title]}>
            {truncate(guideDetails.title, 11)}
          </Text>
          <Text style={[styles.text, styles.subtitle]}>
            {guideDetails.subtitle === ""
              ? "内容未定"
              : truncate(guideDetails.subtitle, 40)}
          </Text>
          <Text style={[styles.text, styles.airtime]}>
            {formatAirtime(guideDetails.start_time, guideDetails.end_time)}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: displayHeight / 2,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  guide_info: {
    backgroundColor: "#000000a0",
    width: displayWidth * 0.9,
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  text: {
    color: "white",
    marginBottom: 8,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 15,
  },
  airtime: {
    fontSize: 13,
  },
});
