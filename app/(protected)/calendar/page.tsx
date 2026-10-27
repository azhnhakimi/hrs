"use client";

import { useEffect, useState } from "react";
import { AppCalendar } from "@/app/components/app-calendar";
import { events } from "@/app/mock_data/calendar";

const CalendarPage = () => {
  const [mounted, setMounted] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    setDate(new Date());
    setMounted(true);
  }, []);

  return (
    <div className="bg-background transition-colors duration-300 ease-in-out flex flex-1 min-h-screen">
      <main className="w-full h-screen min-h-0 flex flex-col mx-auto">
        {mounted && (
          <AppCalendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="w-full h-full bg-surface"
            events={events}
          />
        )}
      </main>
    </div>
  );
};

export default CalendarPage;
