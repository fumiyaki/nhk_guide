import React from "react";
import { GuideCard } from "../components/molecules/GuideCard";
import { RecommendedGuideCard } from "../components/molecules/RecommendedGuideCard";
import { Guide } from "../types/guide";

type Props = {
  recommendedGuide: Guide;
  guide: Guide;
};

export const RenderGuideCard: React.FC<Props> = ({
  recommendedGuide,
  guide,
}: Props) => {
  return "marker" === guide.title ? (
    <RecommendedGuideCard guide={recommendedGuide} />
  ) : (
    <GuideCard guide={guide} />
  );
};
