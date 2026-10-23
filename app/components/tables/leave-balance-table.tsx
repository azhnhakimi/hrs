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

import { leaveOverviewRecords } from "@/app/mock_data/leave";

const LeaveBalanceTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-muted-foreground">Type</TableHead>
          <TableHead className="text-muted-foreground">Allocation</TableHead>
          <TableHead className="text-muted-foreground">Used</TableHead>
          <TableHead className="text-muted-foreground">Applying</TableHead>
          <TableHead className="text-muted-foreground">Remaining</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leaveOverviewRecords.map((record, idx) => (
          <TableRow key={record.leaveType}>
            <TableCell className="font-medium">{record.leaveType}</TableCell>
            <TableCell className="font-medium">
              {record.allocation} days
            </TableCell>
            <TableCell className="font-medium">{record.used} days</TableCell>
            <TableCell className="font-medium">
              {record.applying} days
            </TableCell>
            <TableCell className="font-medium">
              {record.remaining} days
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default LeaveBalanceTable;
