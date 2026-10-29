type TimeOfDay = "morning" | "afternoon" | "evening" | "night";

export function getTimeOfDay(timeZone?: string): TimeOfDay {
  const hour = Number(
    new Intl.DateTimeFormat("en-MY", {
      hour: "numeric",
      hourCycle: "h23",
      ...(timeZone && { timeZone }),
    }).format(new Date()),
  );

  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 21) return "evening";

  return "night";
}
