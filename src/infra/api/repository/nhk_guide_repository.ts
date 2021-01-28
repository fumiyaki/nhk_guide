import {
  fetchNHKGuideListData,
  fetchNHKGuideDetailsData,
} from "../datasources/nhk_guide_request";
import { mockGuideListData, mockGuideDetail } from "../datasources/mockData";
import {
  Guide,
  GuideDetails,
  NHKGuideListViewModel,
} from "../../../types/guide";

// const MODE = "api";
const MODE = "mock";

export const getNHKGuideListData = async (
  area: string = "",
  service: string = "",
  date: string = ""
) => {
  if (MODE === "api") {
    let guideList = await fetchNHKGuideListData(area, service, date);
    if (guideList === undefined) {
      return undefined;
    }
    return separateGuideData(guideList);
  } else if (MODE === "mock") {
    return new Promise<NHKGuideListViewModel>((resolve) => {
      resolve(separateGuideData(mockGuideListData));
    });
  }
};

export const getNHKGuideData = async (
  area: string = "",
  service: string = "",
  guideId: string = ""
) => {
  if (MODE === "api") {
    return fetchNHKGuideDetailsData(area, service, guideId);
  } else if (MODE === "mock") {
    return new Promise<GuideDetails>((resolve) => {
      resolve(mockGuideDetail);
    });
  }
};

const separateGuideData = (guideList: Guide[]) => {
  // 番組表の中からランダムに1つ抽出
  const i = Math.floor(Math.random() * Math.floor(guideList.length));
  const recommendedGuide = guideList[i];

  guideList = guideList.filter((guide) => guide.id !== recommendedGuide.id);
  return {
    guideList: guideList,
    recommendedGuide: recommendedGuide,
  };
};
