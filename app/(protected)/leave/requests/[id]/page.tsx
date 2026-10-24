import { Suspense } from "react";
import { leaveRecords } from "@/app/mock_data/leave";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

type LeaveDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export default function LeaveDetailsPage({ params }: LeaveDetailsPageProps) {
  return (
    <Suspense
      fallback={
        <div className="p-6 flex-1 flex justify-center items-center">
          Loading leave details...
        </div>
      }
    >
      <LeaveDetails params={params} />
    </Suspense>
  );
}

async function LeaveDetails({ params }: LeaveDetailsPageProps) {
  const { id } = await params;

  const record = leaveRecords.find((record) => record.id === id);

  if (!record) {
    return (
      <div className="p-6 flex-1 flex justify-center items-center">
        Leave request not found.
      </div>
    );
  }

  return (
    <main className="mx-auto w-full max-w-5xl p-6 min-h-screen">
      <h1 className="text-3xl font-bold">Leave Request Details</h1>

      <div className="mt-6 rounded-xl border-2 border-border bg-surface p-6 flex flex-col justify-start items-start gap-4">
        <div className="flex flex-row justify-between items-start w-full">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-light text-muted-foreground">
              Leave Request / {record.id}
            </p>
            <p className="text-xl font-semibold">{record.leaveType}</p>
            <p className="text-muted-foreground font-light">
              Submitted on {record.submittedOn}
            </p>
          </div>
          <Badge
            className="w-[80px] py-3 justify-center"
            variant={
              record.approvalStatus === "Approved"
                ? "success"
                : record.approvalStatus === "Pending"
                  ? "pending"
                  : "destructive"
            }
          >
            {record.approvalStatus}
          </Badge>
        </div>
        <div>
          <p className="text-sm font-light text-muted-foreground">Leave on</p>
          <p className="font-semibold">{record.date}</p>
        </div>
        <div>
          <p className="text-sm font-light text-muted-foreground">
            Attachments
          </p>
          <p className="font-semibold">-</p>
        </div>
        <div>
          <p className="text-sm font-light text-muted-foreground">
            Reasons for leave
          </p>
          <p className="font-semibold">{record.purpose}</p>
        </div>
        <div className="w-full border border-border my-3" />
        <div>
          <p className="text-sm font-light text-muted-foreground">Approver</p>
          <p className="font-semibold">{record.approver ?? "-"}</p>
        </div>
        <div>
          <p className="text-sm font-light text-muted-foreground">
            Approver Comments
          </p>
          <p className="font-semibold">{record.approverComments ?? "-"}</p>
        </div>
        {record.approvalStatus === "Approved" && (
          <button className="w-full py-3 flex flex-row justify-center items-center gap-2 bg-red-800 hover:bg-red-900 text-white hover:cursor-pointer rounded-2xl mt-6 transition-colors">
            <X className="text-white" />
            <p className="font-semibold text-white">Cancel request</p>
          </button>
        )}
      </div>
    </main>
  );
}
