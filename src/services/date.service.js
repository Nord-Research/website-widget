import dayjs from 'dayjs';

const DAYS_TO_GET = 1;
const DATE_FORMAT = 'YYYY-MM-DD';

export const getToday = (format = DATE_FORMAT) => {
  const curretDate = new Date();

  return dayjs(curretDate).format(format);
}

export const getPastDay = (past = 1, format = DATE_FORMAT) => {
  const curretDate = new Date();

  return dayjs(curretDate
    .setDate(curretDate.getDate() - past))
    .format(format);
}

export const getYesterday = (format = DATE_FORMAT) =>
  getPastDay(1, format);


export const getTodayAndPastDay = (past = DAYS_TO_GET, format = DATE_FORMAT) => {
  const today = getToday(format);
  const pastDay = getPastDay(past, format);

  return {
    today,
    pastDay,
  }
}
