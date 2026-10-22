import AttendanceTable from "@/app/components/tables/attendance-table";

const DashboardPage = () => {
  return (
    <div className="bg-background transition-colors duration-300 ease-in-out flex flex-1 min-h-screen w-full justify-center items-center">
      <main className="w-full max-w-5xl min-h-screen py-6 ">
        <AttendanceTable />
      </main>
    </div>
  );
};

export default DashboardPage;
