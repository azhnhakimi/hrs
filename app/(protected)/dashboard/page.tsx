import ThemeToggle from "@/app/components/theme-toggle";

const DashboardPage = () => {
  return (
    <div className="bg-background transition-colors duration-300 flex flex-1 min-h-screen justify-center items-center">
      <ThemeToggle />
    </div>
  );
};

export default DashboardPage;
