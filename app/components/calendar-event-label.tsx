import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "cn";
import { CalendarEvent } from "../constants/calendar";
import { EventSegment } from "../constants/calendar";
import { Locale } from "react-day-picker";

const toDayKey = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

const formatEventRange = (event: CalendarEvent, locale?: Partial<Locale>) => {
  const code = locale?.code;
  const fmtDate = (d: Date) =>
    d.toLocaleDateString(code, {
      weekday: "short",
      day: "numeric",
      month: "short",
    });

  const { start, end } = event;

  if (!end || toDayKey(end) === toDayKey(start)) {
    return fmtDate(start);
  }

  return `${fmtDate(start)} – ${fmtDate(end)}`;
};

function CalendarEventLabel({
  event,
  segment,
  locale,
  className,
}: {
  event: CalendarEvent;
  segment?: EventSegment;
  locale?: Partial<Locale>;
  className?: string;
}) {
  const joinLeft = segment ? !segment.isStart : false;
  const joinRight = segment ? !segment.isEnd : false;

  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "block min-w-0 self-stretch truncate px-1.5 py-0.5 text-left text-xs text-white hover:cursor-pointer",
          joinLeft ? "-ml-1 rounded-l-none" : "rounded-l",
          joinRight ? "-mr-1 rounded-r-none" : "rounded-r",
          className,
        )}
        style={{ backgroundColor: event.color ?? "#3b82f6" }}
      >
        {segment && !segment.showTitle ? "\u00A0" : event.title}
      </PopoverTrigger>
      <PopoverContent className="w-64" side="right">
        <p className="font-medium">{event.title}</p>
        <p className="text-sm text-muted-foreground">
          {formatEventRange(event, locale)}
        </p>
      </PopoverContent>
    </Popover>
  );
}

export default CalendarEventLabel;
