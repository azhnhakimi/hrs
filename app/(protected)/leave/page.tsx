import LeaveBalanceTable from "@/app/components/tables/leave-balance-table";
import LeaveUpcomingCard from "@/app/components/leave-upcoming-card";
import { Plus } from "lucide-react";

import { leaveRecords } from "@/app/mock_data/leave";
import LeaveTable from "@/app/components/tables/leave-table";

const LeavePage = () => {
  return (
    <div className="bg-background transition-colors duration-300 ease-in-out flex flex-1 min-h-screen w-full justify-center items-center">
      <main className="w-full max-w-7xl min-h-screen py-6 flex flex-col justify-start gap-6">
        <div className="w-full">
          <p className="text-3xl font-bold">Leave Management</p>
          <p className="text-lg text-muted-foreground">
            Manage your leave requests, track your remaining balance, and view
            your leave history.
          </p>
        </div>

        <div className="w-full flex flex-row items-stretch justify-center gap-6">
          <div className="flex-2 p-6 border-2 border-border bg-surface rounded-xl flex gap-6 flex-col">
            <p className="font-semibold text-lg">Leave Balance Overview</p>
            <LeaveBalanceTable />
            <button className="flex justify-center items-center gap-2 w-full py-2 bg-foreground rounded-lg mt-auto hover:cursor-pointer">
              <Plus className="text-background" />
              <p className="text-background font-semibold">Request Leave</p>
            </button>
          </div>

          <div className="flex-1 p-6 border-2 border-border bg-surface rounded-xl flex gap-4 flex-col h-85">
            <p className="font-semibold text-lg">Upcoming Leaves</p>

            {leaveRecords.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No upcoming leaves.
              </p>
            ) : (
              <div className="flex flex-col gap-4 overflow-y-auto min-h-0 scrollbar-hide">
                {leaveRecords.map(
                  (record, idx) =>
                    record.approvalStatus !== "Rejected" && (
                      <LeaveUpcomingCard
                        key={idx}
                        leaveType={record.leaveType}
                        date={record.date}
                        variant={
                          record.approvalStatus === "Approved"
                            ? "approved"
                            : "pending"
                        }
                      />
                    ),
                )}
              </div>
            )}
          </div>
        </div>

        <p className="text-2xl font-semibold mt-4">Leave request history</p>

        <LeaveTable />
      </main>
    </div>
  );
};

export default LeavePage;
