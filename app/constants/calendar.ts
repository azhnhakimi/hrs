export type CalendarEvent = {
  id: string;
  title: string;
  start: Date;
  end?: Date;
  color?: string;
  allDay?: boolean;
};

export type EventSegment = {
  event: CalendarEvent;
  slot: number;
  isStart: boolean;
  isEnd: boolean;
  showTitle: boolean;
};
