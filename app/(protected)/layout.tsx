import { Suspense } from "react";
import { AppSidebar } from "../components/app-sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full justify-center items-center">
      <Suspense
        fallback={<div className="w-[var(--sidebar-width)] shrink-0" />}
      >
        <AppSidebar />
      </Suspense>
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
}
