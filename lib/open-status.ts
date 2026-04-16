export type OpenStatus = {
  isOpen: boolean;
  closesAt: string | null;
  opensAt: string | null;
  nextOpenDay: string | null;
};

const OPEN_DAYS = [2, 3, 4, 5, 6]; // Tue=2, Wed=3, Thu=4, Fri=5, Sat=6
const OPEN_HOUR = 16;
const CLOSE_HOUR = 21;
const CLOSE_MINUTE = 30;

const DAY_NAMES = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

export function getOpenStatus(): OpenStatus {
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Europe/Berlin" })
  );

  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentMinutes = hour * 60 + minute;
  const openMinutes = OPEN_HOUR * 60;
  const closeMinutes = CLOSE_HOUR * 60 + CLOSE_MINUTE;

  const isOpenDay = OPEN_DAYS.includes(day);
  const isOpenTime = currentMinutes >= openMinutes && currentMinutes < closeMinutes;
  const isOpen = isOpenDay && isOpenTime;

  if (isOpen) {
    return {
      isOpen: true,
      closesAt: "21:30 Uhr",
      opensAt: null,
      nextOpenDay: null,
    };
  }

  // Find next open day
  let daysAhead = 1;
  while (daysAhead <= 7) {
    const nextDay = (day + daysAhead) % 7;
    if (OPEN_DAYS.includes(nextDay)) {
      const isToday = daysAhead === 0;
      const isTomorrow = daysAhead === 1;
      let label: string;
      if (isToday) label = "heute";
      else if (isTomorrow) label = "morgen";
      else label = DAY_NAMES[nextDay];
      return {
        isOpen: false,
        closesAt: null,
        opensAt: "16:00 Uhr",
        nextOpenDay: label,
      };
    }
    daysAhead++;
  }

  return { isOpen: false, closesAt: null, opensAt: null, nextOpenDay: null };
}
