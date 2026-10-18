"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import ThemeToggle from "./theme-toggle";
import Image from "next/image";
import { useTheme } from "next-themes";
import { PanelLeft } from "lucide-react";
import { useState, useEffect } from "react";

export function AppSidebar() {
  const { resolvedTheme } = useTheme();
  const { state, toggleSidebar } = useSidebar();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const logo = `/logo/logo-${resolvedTheme === "dark" ? "light" : "dark"}.svg`;

  return (
    <Sidebar collapsible="icon" className="bg-surface">
      <SidebarHeader
        className={`flex flex-row items-center ${
          state === "collapsed" ? "justify-center px-0" : "justify-between"
        }`}
      >
        {state === "collapsed" ? (
          <button
            type="button"
            onClick={toggleSidebar}
            aria-label="Expand sidebar"
            className="group relative flex size-9 shrink-0 items-center justify-center rounded-lg cursor-ew-resize transition-colors"
          >
            <Image
              src={logo}
              alt="HRS logo"
              width={36}
              height={36}
              className="absolute inset-0 h-full w-full rounded-lg object-contain transition-opacity duration-200 group-hover:opacity-0"
            />

            <PanelLeft
              size={20}
              color={resolvedTheme !== "dark" ? "#000" : "#fff"}
              className="absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            />
          </button>
        ) : (
          <>
            <div className="flex flex-row gap-4">
              <div className="aspect-square w-[45px] shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={logo}
                  alt="HRS logo"
                  width={45}
                  height={45}
                  className="block h-full w-full"
                />
              </div>

              <div className="self-end">
                <p className="text-lg font-bold">HRS</p>
                <p className="text-sm font-light text-muted-foreground">
                  Human Resource System
                </p>
              </div>
            </div>

            <SidebarTrigger className="self-start hover:cursor-pointer" />
          </>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>

      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
