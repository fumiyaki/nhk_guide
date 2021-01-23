import {
  fetchNHKGuideListData,
  fetchNHKGuideDetailsData,
} from "../datasources/nhk_guide_request";
import { mockGuideListData, mockGuideDetail } from "../datasources/mockData";
import { Guide, GuideDetails } from "../../types/guide";

// const MODE = "api";
const MODE = "mock";

export const getNHKGuideListData = async (
  area: string = "",
  service: string = "",
  date: string = ""
) => {
  if (MODE === "api") {
    return fetchNHKGuideListData(area, service, date);
  } else if (MODE === "mock") {
    return new Promise<Guide[]>((resolve) => {
      resolve(mockGuideListData);
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
