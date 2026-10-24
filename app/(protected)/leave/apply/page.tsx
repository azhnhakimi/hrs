import LeaveApplyForm from "@/app/components/forms/leave-apply-form";

const LeaveApply = () => {
  return (
    <div className="bg-background transition-colors duration-300 ease-in-out flex flex-1 min-h-screen">
      <main className="w-full max-w-3xl min-h-screen py-6 flex flex-col justify-start gap-6 mx-auto">
        <p className="text-3xl font-bold w-full">Apply Leave</p>
        <LeaveApplyForm />
      </main>
    </div>
  );
};

export default LeaveApply;
