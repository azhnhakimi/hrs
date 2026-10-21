"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Banknote,
  CalendarClock,
  ChartNoAxesCombined,
  Moon,
  Sun,
  Users,
} from "lucide-react";
import SigninForm from "./components/forms/signin-form";

const listItems = [
  {
    icon: Users,
    text: "Employee Management",
    subtext: "Organize and support your team",
  },
  {
    icon: CalendarClock,
    text: "Attendance & Leave",
    subtext: "Track time and manage time off",
  },
  {
    icon: Banknote,
    text: "Payroll",
    subtext: "Accurate and on time",
  },
  {
    icon: ChartNoAxesCombined,
    text: "Reports & Analytics",
    subtext: "Data-driven decisions",
  },
];

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";
  const imgLink = isDark
    ? "url('/images/backdrop-dark.png')"
    : "url('/images/backdrop-light.png')";
  const logo = `/logo/logo-${resolvedTheme === "dark" ? "light" : "dark"}.svg`;

  return (
    <div className="flex flex-1 justify-center items-center min-h-screen w-full overflow-hidden bg-background relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: imgLink,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background to-background" />

      <button
        onClick={() => {
          setTheme(isDark ? "light" : "dark");
        }}
        className="absolute top-8 right-8 w-10 aspect-square flex justify-center items-center rounded-full hover:cursor-pointer z-50"
      >
        {isDark ? (
          <Moon color="#fff" size={24} />
        ) : (
          <Sun color="#000" size={24} />
        )}
      </button>

      <div className="relative z-10 flex min-h-screen items-center justify-center w-[50%]">
        <div className="max-w-xl flex gap-2 flex-col px-10 py-10 rounded-2xl border border-background/20 bg-background/10 backdrop-blur-xl">
          <div className="flex flex-row items-end gap-2">
            <Image
              src={logo}
              alt="HRS logo"
              width={50}
              height={50}
              className="transition-opacity duration-200 rounded-lg"
            />
            <p className="text-5xl font-bold">HRS</p>
          </div>
          <p className="text-muted-foreground text-md font-semibold">
            Human Resource System
          </p>
          <p className="text-muted-foreground text-lg font-light">
            Manage your people time and growth with a modern HR platform built
            for better workplaces.
          </p>

          <div className="flex flex-col gap-5 mt-6">
            {listItems.map((item) => (
              <div
                key={item.text}
                className="flex justify-start items-center gap-4"
              >
                <div className="p-3 rounded-lg flex justify-center items-center bg-foreground">
                  <item.icon className="text-background" />
                </div>
                <div>
                  <p className="text-md font-semibold text-foreground">
                    {item.text}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-8 rounded-lg bg-foreground px-6 py-3 font-medium text-background max-w-[10rem]">
            Get Started
          </button>
        </div>
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-16 w-[50%] ml-auto">
        <div className="w-full max-w-xl">
          <SigninForm />
        </div>
      </div>
    </div>
  );
}
