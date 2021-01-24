import dayjs from "dayjs";
import ja from "dayjs/locale/ja";
import { mockGuideData } from "../api/datasources/mockData";
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
