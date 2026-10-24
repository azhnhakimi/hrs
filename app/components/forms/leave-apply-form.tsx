"use client";

import { useState } from "react";
import {
  Calendar as CalendarIcon,
  ChevronDown,
  CircleCheck,
  Clock,
  FileText,
  LogOut,
  Upload,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const leaveTypes = ["Annual Leave", "Medical Leave", "Emergency Leave"];

const LeaveApplyForm = () => {
  const [leaveType, setLeaveType] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [purpose, setPurpose] = useState("");
  const [file, setFile] = useState<File | null>(null);

  return (
    <form className="flex flex-col gap-6">
      <div className="form-field-container">
        <label className="form-field-label">Leave Type</label>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <button className="bg-surface w-full border border-border flex justify-between items-center p-4  rounded-lg hover:cursor-pointer">
                <p
                  className={`text-lg ${leaveType === "" ? "text-muted-foreground" : "text-foreground"}`}
                >
                  {leaveType === "" ? "Please select a leave type" : leaveType}
                </p>
                <ChevronDown />
              </button>
            }
          />
          <DropdownMenuContent>
            <DropdownMenuGroup>
              {leaveTypes.map((type, idx) => (
                <DropdownMenuItem
                  key={idx}
                  onClick={() => setLeaveType(type)}
                  className="text-base"
                >
                  {type}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="form-field-container">
        <label className="form-field-label">Date</label>
        <Popover>
          <PopoverTrigger
            render={
              <button className="bg-surface w-full border border-border flex justify-between items-center p-4 rounded-lg hover:cursor-pointer">
                <p
                  className={`text-lg ${
                    !date ? "text-muted-foreground" : "text-foreground"
                  }`}
                >
                  {!date
                    ? "Please select a date"
                    : date.toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                </p>
                <CalendarIcon />
              </button>
            }
          />
          <PopoverContent className="" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="w-full h-full"
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="form-field-container">
        <div className="flex flex-col justify-start items-start">
          <label className="form-field-label">Purpose</label>
          <label className="text-sm text-muted-foreground text-light">
            Describe the reason for your leave request
          </label>
        </div>
        <textarea
          className="form-field-input bg-surface border border-border rounded-lg min-h-45 p-4"
          placeholder="Enter your purpose..."
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
        />
      </div>

      <div className="form-field-container">
        <label className="form-field-label">Leave Attachment</label>

        <label
          htmlFor="leave-attachment"
          className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border p-8 text-center cursor-pointer hover:bg-muted/50 transition-colors"
        >
          <Upload className="size-8 text-muted-foreground" />
          <p className="font-medium">Click to upload a file</p>
          <p className="text-sm text-muted-foreground">PDF, PNG, or JPG</p>

          <input
            id="leave-attachment"
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
        </label>

        {file && (
          <div className="flex items-center justify-between gap-3 rounded-lg border border-border bg-surface p-3">
            <div className="flex min-w-0 items-center gap-2">
              <FileText className="size-5 shrink-0 text-muted-foreground" />

              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setFile(null);
                const input = document.getElementById(
                  "leave-attachment",
                ) as HTMLInputElement | null;

                if (input) input.value = "";
              }}
              className="shrink-0 rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Remove attachment"
            >
              <X className="size-4" />
            </button>
          </div>
        )}

        <label className="text-sm text-muted-foreground">
          Attach supporting documents for your leave application.
        </label>
      </div>

      <button className="bg-foreground p-3 text-background rounded-lg hover:cursor-pointer font-semibold">
        Submit
      </button>
    </form>
  );
};

export default LeaveApplyForm;
