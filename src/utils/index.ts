import dayjs from "dayjs";
import ja from "dayjs/locale/ja";
import { mockGuideData } from "../api/datasources/mockData";
import { GuideDetails } from "../types/guide";
dayjs.locale(ja);

export const formatAirtime = (startTime: string, endTime: string): string => {
  const start = dayjs(startTime);
  const end = dayjs(endTime);

  const airTime = `${start.format("M/DD(dd) H:mm")} - ${end.format("H:mm")}`;

  return airTime;
};

export const calcAirtime = (startTime: string, endTime: string): string => {
  const start = dayjs(startTime);
  const end = dayjs(endTime);
  const airTime = end.diff(start, "minute").toString() + "分";
  return airTime;
};

export const makeMarker = () => {
  let data = mockGuideData;
  data.title = "marker";
  return data;
};

export const truncate = (value: string, maxString: number): string => {
  return value.length > maxString
    ? value.substring(0, maxString + 1) + "..."
    : value;
};

export const chooseURL = (guide: GuideDetails | undefined) => {
  if (guide === undefined) {
    return "http://www.nhk.or.jp/common/img/media/gtv-200x200.png";
  }
  if (guide.program_logo === null) {
    return "http:" + guide.service.logo_l.url;
  }
  return "http:" + guide.program_logo.url;
};
