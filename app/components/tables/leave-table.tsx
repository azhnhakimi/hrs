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

import { leaveRecords } from "@/app/mock_data/leave";
import { EllipsisVertical } from "lucide-react";

const LeaveTable = () => {
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
          <TableHead className="w-[8%] text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {leaveRecords.map((record, idx) => (
          <TableRow key={idx}>
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
            <TableCell className="text-center">
              <button className="hover:cursor-pointer">
                <EllipsisVertical className="size-5" />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default LeaveTable;
