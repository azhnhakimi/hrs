import ThemeToggle from "@/app/components/theme-toggle";

const DashboardPage = () => {
  return (
    <div className="bg-background transition-colors duration-300 ease-in-out flex flex-1 min-h-screen w-full justify-center items-center">
      <p>Dashboard page.</p>
      <ThemeToggle />
    </div>
  );
};

export default DashboardPage;
