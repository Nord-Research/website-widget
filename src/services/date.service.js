import dayjs from 'dayjs';

const DAYS_TO_GET = 1;
const DATE_FORMAT = 'YYYY-MM-DD'

export const getTodayAndYesterday = ({ daysToGet = DAYS_TO_GET, format = DATE_FORMAT } = {}) => {
  const curretDate = new Date();
  const today = dayjs(curretDate).format(format);
  const yesterday =
    dayjs(curretDate
      .setDate(curretDate.getDate() - daysToGet))
      .format(format);

  return {
    today,
    yesterday,
  }
}
