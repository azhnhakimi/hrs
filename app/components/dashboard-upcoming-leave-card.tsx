import type { LeaveRecord } from "../mock_data/leave";
import { Calendar } from "lucide-react";

const DashboardUpcomingLeaveCard = ({ leave }: { leave: LeaveRecord }) => {
  return (
    <div className="border border-border p-4 rounded-md flex flex-col gap-2">
      <div className="flex flex-row justify-start items-center gap-2">
        <Calendar size={16} />
        <p>{leave.leaveType}</p>
      </div>
      <p className="text-sm text-muted-foreground">{leave.date}</p>
    </div>
  );
};

export default DashboardUpcomingLeaveCard;
