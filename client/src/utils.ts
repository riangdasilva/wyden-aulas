export function translateWeekday(weekday: string): string {
  const weekdays: { [key: string]: string } = {
    monday: "Segunda-feira",
    tuesday: "Terça-feira",
    wednesday: "Quarta-feira",
    thursday: "Quinta-feira",
    friday: "Sexta-feira",
  };

  return weekdays[weekday];
}

export function translatePeriod(period: string): string {
  const periods: { [key: string]: string } = {
    morning: "Manhã",
    afternoon: "Tarde",
    night: "Noite",
  };
  return periods[period];
}

export function getWeekdayByNumber(number: number): string {
  switch (number) {
    case 0:
      return "sunday";
    case 1:
      return "monday";
    case 2:
      return "tuesday";
    case 3:
      return "wednesday";
    case 4:
      return "thursday";
    case 5:
      return "friday";
    case 6:
      return "saturday";
    default:
      return "";
  }
}

export function getWeekdayByDate(date: Date): string {
  const day = date.getDay();
  return getWeekdayByNumber(day);
}

export function getPeriodByDate(date: Date): string {
  const hour = date.getHours();
  if (hour >= 6 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 18) {
    return "afternoon";
  }
  return "night";
}
