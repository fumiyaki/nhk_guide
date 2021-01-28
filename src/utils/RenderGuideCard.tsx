import React from "react";
import { TouchableOpacity } from "react-native";
import { GuideCard } from "../components/molecules/GuideCard";
import { RecommendedGuideCard } from "../components/molecules/RecommendedGuideCard";
import { Guide } from "../types/guide";

type Props = {
  recommendedGuide: Guide;
  guide: Guide;
  onPress: (guide: Guide) => void;
};

export const RenderGuideCard: React.FC<Props> = ({
  recommendedGuide,
  guide,
  onPress,
}: Props) => {
  return "marker" === guide.title ? (
    <TouchableOpacity onPress={() => onPress(recommendedGuide)}>
      <RecommendedGuideCard guideId={recommendedGuide.id} />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={() => onPress(guide)}>
      <GuideCard guide={guide} />
    </TouchableOpacity>
  );
};
