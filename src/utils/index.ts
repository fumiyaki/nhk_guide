export const formatAirtime = (iso8601: string): string => {
  let datetime = new Date(iso8601);
  const month = datetime.getMonth() + 1;
  const date = datetime.getDate();
  const hour = datetime.getHours();
  const minute = datetime.getMinutes();
  const dateOfWeek = datetime.getDay();
  const dateOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dateOfWeek];
  return `${month}/${date}(${dateOfWeekStr}) ${hour}:${minute} - 放送`;
};
