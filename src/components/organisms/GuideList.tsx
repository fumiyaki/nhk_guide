import React from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { GuideCard } from "../../components/molecules/GuideCard";
import { Guide } from "../../../src/types/guide";

type Props = {
  guideList: Guide[] | undefined;
  onPress: (guide: Guide) => void;
};

export const GuideList: React.FC<Props> = ({ guideList, onPress }: Props) => {
  return (
    <View>
      {guideList === undefined ? (
        <Text>No Data</Text>
      ) : (
        <FlatList
          data={guideList}
          renderItem={({ item }: { item: Guide }) => (
            <TouchableOpacity onPress={() => onPress(item)}>
              <GuideCard guide={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};
