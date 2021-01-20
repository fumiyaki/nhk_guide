import React from "react";
import { FlatList, View, Text } from "react-native";
import { GuideCard } from "../../components/molecules/GuideCard";
import { Guide } from "../../../src/types/guide";

type Props = {
  guideList: Guide[] | undefined;
};

export const GuideList: React.FC<Props> = ({ guideList }: Props) => {
  return (
    <View>
      {guideList === undefined ? (
        <Text>No Data</Text>
      ) : (
        <FlatList
          data={guideList}
          renderItem={({ item }: { item: Guide }) => <GuideCard guide={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};
