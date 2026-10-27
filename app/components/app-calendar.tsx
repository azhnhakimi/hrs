"use client";

import * as React from "react";
import { cn } from "cn";
import {
  DayPicker,
  getDefaultClassNames,
  useDayPicker,
  type DayButton,
  type Locale,
} from "react-day-picker";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarEvent } from "../constants/calendar";

function AppCalendar({
  className,
  classNames,
  events = [],
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
  events?: CalendarEvent[];
}) {
  const defaultClassNames = getDefaultClassNames();

  const toDayKey = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

  const eventsByDay = React.useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();
    for (const event of events) {
      const cursor = new Date(
        event.start.getFullYear(),
        event.start.getMonth(),
        event.start.getDate(),
      );
      const last = event.end ?? event.start;
      const stop = new Date(
        last.getFullYear(),
        last.getMonth(),
        last.getDate(),
      );
      while (cursor <= stop) {
        const key = toDayKey(cursor);
        map.set(key, [...(map.get(key) ?? []), event]);
        cursor.setDate(cursor.getDate() + 1);
      }
    }
    return map;
  }, [events]);

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "group/calendar bg-background p-0 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(9)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code, { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-full h-full overflow-hidden", defaultClassNames.root),
        months: cn(
          "flex h-full w-full flex-col relative",
          defaultClassNames.months,
        ),
        month: cn(
          "flex flex-col w-full h-full min-h-0 gap-4",
          defaultClassNames.month,
        ),
        nav: cn(
          "absolute left-0 top-4 flex h-(--cell-size) items-center gap-1 px-2",
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "mt-4 flex h-(--cell-size) w-full items-center justify-start pl-[calc(var(--cell-size)*2+1.25rem)]",
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          "relative rounded-(--cell-radius)",
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn(
          "absolute inset-0 bg-popover opacity-0",
          defaultClassNames.dropdown,
        ),
        caption_label: cn(
          "font-medium select-none",
          captionLayout === "label"
            ? "text-2xl font-bold tracking-tight"
            : "flex items-center gap-1 rounded-(--cell-radius) text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          defaultClassNames.caption_label,
        ),
        month_grid: cn(
          "flex flex-col flex-1 min-h-0 w-full border-collapse",
          defaultClassNames.month_grid,
        ),
        weeks: cn("flex flex-col flex-1 min-h-0", defaultClassNames.weeks),
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "min-w-0 flex-1 basis-0 rounded-(--cell-radius) text-[0.8rem] font-normal text-muted-foreground select-none",
          defaultClassNames.weekday,
        ),
        week: cn("flex w-full flex-1", defaultClassNames.week),
        week_number_header: cn(
          "w-(--cell-size) select-none",
          defaultClassNames.week_number_header,
        ),
        week_number: cn(
          "text-[0.8rem] text-muted-foreground select-none",
          defaultClassNames.week_number,
        ),
        day: cn(
          "group/day relative min-w-0 flex-1 basis-0 overflow-hidden rounded-none p-0 text-center select-none",
          defaultClassNames.day,
        ),
        range_start: cn(
          "relative isolate z-0 rounded-l-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:right-0 after:w-4 after:bg-muted",
          defaultClassNames.range_start,
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn(
          "relative isolate z-0 rounded-r-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:left-0 after:w-4 after:bg-muted",
          defaultClassNames.range_end,
        ),
        today: cn(
          "rounded-none bg-muted text-foreground",
          defaultClassNames.today,
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside,
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled,
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          );
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-5", className)} {...props} />
            );
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-5", className)}
                {...props}
              />
            );
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          );
        },
        DayButton: ({ ...props }) => (
          <AppCalendarDayButton
            locale={locale}
            events={eventsByDay.get(toDayKey(props.day.date)) ?? []}
            {...props}
          />
        ),
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        MonthCaption: ({ calendarMonth, displayIndex, children, ...props }) => {
          const { goToMonth } = useDayPicker();
          return (
            <div {...props}>
              {children}
              <Button
                type="button"
                className="ml-4 py-4 px-6 rounded-sm hover:cursor-pointer font-medium"
                onClick={() => {
                  goToMonth(new Date());
                }}
              >
                Today
              </Button>
            </div>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function AppCalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  events = [],
  children,
  ...props
}: React.ComponentProps<typeof DayButton> & {
  locale?: Partial<Locale>;
  events?: CalendarEvent[];
}) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <div className="relative flex size-full min-w-0 flex-col">
      <Button
        variant="ghost"
        size="icon"
        data-day={day.date.toLocaleDateString(locale?.code)}
        data-selected-single={
          modifiers.selected &&
          !modifiers.range_start &&
          !modifiers.range_end &&
          !modifiers.range_middle
        }
        data-range-start={modifiers.range_start}
        data-range-end={modifiers.range_end}
        data-range-middle={modifiers.range_middle}
        className={cn(
          "absolute inset-0 isolate z-0 flex size-full min-w-0 flex-col justify-start py-2 gap-1 border border-border rounded-none outline-none focus-visible:ring-0 focus-visible:border-border leading-none font-normal data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground dark:hover:text-foreground overflow-hidden",
          defaultClassNames.day,
          className,
        )}
        {...props}
      >
        {children}
      </Button>
      {events.length > 0 && (
        <div className="pointer-events-none relative z-10 mt-9 flex min-h-0 w-full min-w-0 flex-col gap-0.5 px-1">
          {events.slice(0, 3).map((event) => (
            <Popover key={event.id}>
              <PopoverTrigger
                className="pointer-events-auto block w-full min-w-0 truncate rounded px-1.5 py-0.5 text-left text-xs text-white hover:cursor-pointer"
                style={{ backgroundColor: event.color ?? "#3b82f6" }}
              >
                {event.title}
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <p className="font-medium">{event.title}</p>
                <p className="text-sm text-muted-foreground">
                  {event.start.toLocaleString()}
                </p>
              </PopoverContent>
            </Popover>
          ))}
          {events.length > 3 && (
            <Popover>
              <PopoverTrigger className="pointer-events-auto px-1.5 text-left text-xs text-muted-foreground hover:cursor-pointer hover:text-foreground">
                {events.length - 3} more
              </PopoverTrigger>
              <PopoverContent className="w-64 bg-background">
                <div className="flex flex-col gap-1">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className="truncate rounded px-1.5 py-0.5 text-xs text-white"
                      style={{ backgroundColor: event.color ?? "#3b82f6" }}
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      )}
    </div>
  );
}

export { AppCalendar, AppCalendarDayButton };
