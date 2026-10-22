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

import { attendanceRecords } from "@/app/mock_data/attendance-records";

const AttendanceTable = () => {
  return (
    <Table>
      <TableHeader className="bg-table-header">
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Clock In</TableHead>
          <TableHead>Clock Out</TableHead>
          <TableHead>Working Hours</TableHead>
          <TableHead className="text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {attendanceRecords.map((record) => (
          <TableRow key={record.id}>
            <TableCell className="font-medium">{record.date}</TableCell>
            <TableCell className="font-medium">
              {record.clockIn ?? "N/A"}
            </TableCell>
            <TableCell className="font-medium">
              {record.clockOut ?? "N/A"}
            </TableCell>
            <TableCell className="font-medium">{record.workingHours}</TableCell>
            <TableCell className="font-medium text-center">
              <Badge
                className="w-[80px] py-3"
                variant={record.status === "Late" ? "destructive" : "success"}
              >
                {record.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AttendanceTable;
