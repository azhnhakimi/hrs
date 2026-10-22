"use client";

import {
  Calendar,
  ChevronDown,
  CircleCheck,
  Clock,
  LogOut,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AttendanceTable from "@/app/components/tables/attendance-table";
import { months } from "@/app/constants/month";
import { useState, useEffect } from "react";
import {
  getCurrentMonth,
  getCurrentYear,
  getLastFiveYears,
} from "@/app/constants/month";

const AttendancePage = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    setSelectedMonth(getCurrentMonth());

    const currentYear = getCurrentYear();
    setSelectedYear(currentYear);
    setYears(getLastFiveYears());
  }, []);

  return (
    <div className="bg-background transition-colors duration-300 ease-in-out flex flex-1 min-h-screen w-full justify-center items-center">
      <main className="w-full max-w-5xl min-h-screen py-6 flex flex-col justify-start gap-6">
        <div className="w-full">
          <p className="text-3xl font-bold">Attendance</p>
          <p className="text-lg text-muted-foreground">
            Track your working hours and review your attendance records.
          </p>
        </div>

        <div className="bg-surface border-2 border-border rounded-xl w-full p-8 gap-8 flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3">
              <p className="text-sm uppercase text-muted-foreground font-semibold">
                Today's status
              </p>
              <p className="text-xl font-semibold flex flex-row gap-2">
                <CircleCheck />
                Clocked in
              </p>
            </div>
            <div className="bg-background border-2 border-border rounded-3xl px-4 py-1">
              <p>On time</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-1">
              <p className="font-semibold text-muted-foreground text-medium">
                Clock in
              </p>
              <p className="text-3xl font-bold">09:02 AM</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-muted-foreground text-medium">
                Working time
              </p>
              <p className="text-3xl font-bold">04h 28m</p>
            </div>
          </div>
          <button className="bg-foreground flex flex-row justify-center items-center gap-3 rounded-4xl py-3 hover:cursor-pointer mt-4">
            <LogOut className="text-background" />
            <p className="text-background font-semibold text-medium">
              Clock Out
            </p>
          </button>
        </div>

        <div className="w-full flex flex-row jusitfy-between items-stretch gap-6">
          <div className="flex-1 bg-surface border-2 border-border p-8 rounded-xl gap-3 flex flex-col">
            <div className="flex flex-row gap-3 justify-start items-center">
              <Calendar className="text-muted-foreground" />
              <p className="text-medium text-muted-foreground font-semibold">
                Present this month
              </p>
            </div>
            <p className="text-3xl font-bold">18 days</p>
          </div>
          <div className="flex-1 bg-surface border-2 border-border p-8 rounded-xl gap-3 flex flex-col">
            <div className="flex flex-row gap-3 justify-start items-center">
              <Clock className="text-muted-foreground" />
              <p className="text-medium text-muted-foreground font-semibold">
                Total hours
              </p>
            </div>
            <p className="text-3xl font-bold">142 h</p>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center">
          <p className="text-2xl font-semibold mt-4">Attendance history</p>

          <div className="flex flex-row gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <button className="bg-surface border-2 border-border pl-4 pr-3 py-2 rounded-lg flex flex-row justify-center items-center gap-3 hover:cursor-pointer">
                    <p>{selectedMonth}</p>
                    <ChevronDown />
                  </button>
                }
              />
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  {months.map((month, idx) => (
                    <DropdownMenuItem
                      key={idx}
                      onClick={() => setSelectedMonth(month)}
                    >
                      {month}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <button className="bg-surface border-2 border-border pl-4 pr-3 py-2 rounded-lg flex flex-row justify-center items-center gap-3 hover:cursor-pointer">
                    <p>{selectedYear ?? "Select year"}</p>
                    <ChevronDown />
                  </button>
                }
              />
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  {years.map((year) => (
                    <DropdownMenuItem
                      key={year}
                      onClick={() => setSelectedYear(year)}
                    >
                      {year}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <AttendanceTable />
      </main>
    </div>
  );
};

export default AttendancePage;
