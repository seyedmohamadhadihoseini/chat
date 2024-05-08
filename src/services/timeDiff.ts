import { formatDistance } from "date-fns";
export default function DifferentOfTwoTime(time1: Date, time2: Date) {
  const result = formatDistance(time1,time2);
  return result;
}
