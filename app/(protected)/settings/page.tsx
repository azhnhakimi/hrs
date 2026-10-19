import ThemeToggle from "@/app/components/theme-toggle";

const SettingsPage = () => {
  return (
    <div className="bg-background transition-colors duration-300 ease-in-out flex flex-1 min-h-screen w-full justify-center items-center">
      <main className="bg-background transition-colors duration-300 ease-in-out max-w-3xl flex flex-col justify-start items-start min-h-screen min-w-3xl py-8">
        <div>
          <h1 className="text-foreground text-2xl font-bold">Settings</h1>
          <h2 className="text-muted-foreground text-medium font-light">
            Manage your account preferences and customize your experience.
          </h2>
        </div>
        <div className="mt-8 w-full">
          <p className="text-xs text-foreground font-bold">APPEARANCE</p>
          <div className="flex justify-between items-center w-full">
            <p className="text-lg font-medium text-foreground">Theme</p>
            <ThemeToggle />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
