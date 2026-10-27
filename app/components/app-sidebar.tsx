"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
  SidebarRail,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  CalendarDays,
  ClipboardCheck,
  LayoutDashboard,
  PanelLeft,
  ChevronsUpDown,
  LogOut,
  Settings,
  UserRound,
  Bell,
  Calendar,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Attendance",
    url: "/attendance",
    icon: ClipboardCheck,
  },
  {
    name: "Leave",
    url: "/leave",
    icon: CalendarDays,
  },
  {
    name: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    name: "Notifications",
    url: "/notifications",
    icon: Bell,
  },
];

export function AppSidebar() {
  const { resolvedTheme } = useTheme();
  const { state, toggleSidebar } = useSidebar();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pathname = usePathname();

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

      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupLabel>WORKSPACE</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {links.map((link) => {
                const isActive = pathname === link.url;

                return (
                  <SidebarMenuItem key={link.name}>
                    <SidebarMenuButton
                      render={<Link href={link.url} />}
                      className={
                        isActive
                          ? "bg-foreground text-background hover:bg-foreground/90 hover:text-background"
                          : ""
                      }
                    >
                      <link.icon />
                      <span>{link.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:cursor-pointer"
                  >
                    <Avatar className="size-8 rounded-lg">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>

                    <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                      <span className="truncate font-medium">Aori</span>
                      <span className="truncate text-xs font-light text-muted-foreground">
                        aori@gmail.com
                      </span>
                    </div>

                    <ChevronsUpDown className="ml-auto size-4 group-data-[collapsible=icon]:hidden" />
                  </SidebarMenuButton>
                }
              />
              <DropdownMenuContent
                side="top"
                align="end"
                sideOffset={8}
                className="min-w-56"
              >
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col gap-1">
                      <span className="font-medium">Aori</span>
                      <span className="text-xs text-muted-foreground">
                        aori@gmail.com
                      </span>
                    </div>
                  </DropdownMenuLabel>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <UserRound />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem render={<Link href="/settings" />}>
                    <Settings />
                    Settings
                  </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuItem variant="destructive">
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
