import React from "react";
import { FlatList } from "react-native";
import { GuideCard } from "../../components/molecules/GuideCard";
import { Guide } from "../../../src/types/guide";

type Props = {
  guideList: Guide[];
};

export const GuideList: React.FC<Props> = ({ guideList }: Props) => {
  return (
    <FlatList
      data={guideList}
      renderItem={({ item }: { item: Guide }) => <GuideCard guide={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
