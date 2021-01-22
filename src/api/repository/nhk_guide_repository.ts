import { fetchNHKGuideListData } from "../datasources/nhk_guide_request";
import { mockGuideListData } from "../datasources/mockData";
import { Guide } from "../../types/guide";

// const MODE = "api"
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
