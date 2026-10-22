import { Calendar, CircleCheck, Clock, LogOut } from "lucide-react";

const AttendancePage = () => {
  return (
    <div className="bg-background transition-colors duration-300 ease-in-out flex flex-1 min-h-screen w-full justify-center items-center">
      <main className="w-full max-w-5xl min-h-screen py-6 flex flex-col justify-start items-center gap-6">
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
      </main>
    </div>
  );
};

export default AttendancePage;
