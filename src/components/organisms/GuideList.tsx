import React from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { Guide } from "../../../src/types/guide";
import { RenderGuideCard } from "../../utils/RenderGuideCard";

type Props = {
  recommendedGuide: Guide | undefined;
  guideList: Guide[] | undefined;
  onPress: (guide: Guide) => void;
};

export const GuideList: React.FC<Props> = ({
  recommendedGuide,
  guideList,
  onPress,
}: Props) => {
  return (
    <View>
      {guideList === undefined || recommendedGuide === undefined ? (
        <Text>No Data</Text>
      ) : (
        <FlatList
          data={guideList}
          renderItem={({ item }: { item: Guide }) => (
            <TouchableOpacity onPress={() => onPress(item)}>
              <RenderGuideCard
                recommendedGuide={recommendedGuide}
                guide={item}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};
