"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

import { leaveRecords } from "@/app/mock_data/leave";

const LeaveTable = () => {
  const router = useRouter();

  return (
    <Table className="w-full table-fixed">
      <TableHeader className="bg-table-header">
        <TableRow>
          <TableHead className="w-[13%]">Leave Type</TableHead>
          <TableHead className="w-[11%]">Date</TableHead>
          <TableHead className="w-[14%]">Purpose</TableHead>
          <TableHead className="w-[10%] text-center">Attachments</TableHead>
          <TableHead className="w-[14%] text-center">Approval Status</TableHead>
          <TableHead className="w-[12%]">Approver</TableHead>
          <TableHead className="w-[18%]">Approver Comments</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {leaveRecords.map((record, idx) => (
          <TableRow
            key={record.id}
            className="cursor-pointer"
            onClick={() => router.push(`/leave/requests/${record.id}`)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                router.push(`/leave/requests/${record.id}`);
              }
            }}
            tabIndex={0}
            role="link"
          >
            <TableCell className="truncate font-medium">
              {record.leaveType}
            </TableCell>
            <TableCell className="truncate font-medium">
              {record.date}
            </TableCell>
            <TableCell className="truncate font-medium">
              {record.purpose}
            </TableCell>
            <TableCell className="truncate font-medium text-center">
              N/A
            </TableCell>
            <TableCell className="truncate font-medium text-center">
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
            </TableCell>
            <TableCell className="truncate font-medium">
              {record.approver ?? "N/A"}
            </TableCell>
            <TableCell className="truncate font-medium">
              {record.approverComments ?? "N/A"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default LeaveTable;
