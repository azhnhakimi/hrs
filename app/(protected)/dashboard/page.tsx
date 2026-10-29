import DashboardGreeting from "@/app/components/dashboard-greeting";
import { Badge } from "@/components/ui/badge";
import DashboardUpcomingLeaveCard from "@/app/components/dashboard-upcoming-leave-card";

import { leaveRecords } from "@/app/mock_data/leave";

const DashboardPage = () => {
  return (
    <div className="bg-background transition-colors duration-300 ease-in-out flex flex-1 min-h-screen w-full justify-center items-center">
      <main className="w-full max-w-5xl min-h-screen py-6 flex flex-col gap-6">
        <div className="w-full">
          <DashboardGreeting name={"Aori"} />
          <p className="text-lg text-muted-foreground">
            Here's your overview for today.
          </p>
        </div>

        <div className="bg-surface border border-border p-4 rounded-lg flex flex-col gap-2">
          <div className="w-full flex justify-between items-center">
            <p className="font-medium text-lg">Today's attendance</p>
            <Badge variant={"success"}>Present</Badge>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="font-medium text-muted-foreground">Clock In</p>
            <p className="font-bold">09:02 AM</p>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="font-medium text-muted-foreground">Clock Out</p>
            <p className="font-bold">---</p>
          </div>
        </div>

        <div className="bg-surface border border-border p-4 rounded-lg flex flex-col gap-2">
          <p className="font-medium text-lg">My leave</p>
          <div className="w-full flex justify-between items-center">
            <p className="font-medium text-muted-foreground">
              Pending requests
            </p>
            <Badge variant={"pending"}>3 Pending</Badge>
          </div>
          <p className="font-medium text-muted-foreground">Upcoming</p>
          <div className="w-full flex flex-col gap-3 mt-3">
            {leaveRecords.map((record, idx) => (
              <DashboardUpcomingLeaveCard key={record.id} leave={record} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
