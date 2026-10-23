import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";

const cardVariants = cva("rounded-xl border p-4", {
  variants: {
    variant: {
      approved: "border-green-500/20 bg-green-500/5",
      pending: "border-amber-500/20 bg-amber-500/5",
    },
  },
  defaultVariants: {
    variant: "pending",
  },
});

const iconVariants = cva("size-5", {
  variants: {
    variant: {
      approved: "text-green-600 dark:text-green-400",
      pending: "text-amber-600 dark:text-amber-400",
    },
  },
});

const badgeVariants = {
  approved: "success",
  pending: "pending",
} as const;

type LeaveUpcomingCardProps = VariantProps<typeof cardVariants> & {
  leaveType: string;
  date: string;
};

const LeaveUpcomingCard = ({
  variant = "pending",
  leaveType,
  date,
}: LeaveUpcomingCardProps) => {
  return (
    <div className={cn(cardVariants({ variant }))}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <CalendarDays className={cn(iconVariants({ variant }))} />
          <h3 className="font-semibold">{leaveType}</h3>
        </div>

        <Badge variant={badgeVariants[variant ?? "pending"]}>
          {variant === "approved" ? "Approved" : "Pending"}
        </Badge>
      </div>

      <p className="mt-3 text-sm text-muted-foreground">{date}</p>
    </div>
  );
};

export default LeaveUpcomingCard;
