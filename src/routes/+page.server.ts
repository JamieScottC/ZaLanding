import dayjs from "dayjs";
import type { PageServerLoad } from "./$types";
export function load(): PageServerLoad {
  const day = dayjs().format("dddd");
  return {
    day: day,
  };
}
