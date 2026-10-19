import { AppSidebar } from "../components/app-sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full justify-center items-center bg-red-400">
      <AppSidebar />
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
}
