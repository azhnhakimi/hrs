"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="rounded-lg border border-border p-2"
        aria-label="Toggle theme"
        disabled
      >
        Theme
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-14 w-[120px] items-center rounded-full bg-surface px-2 py-1 text-foreground transition-colors duration-300 ease-in-out border border-border"
      aria-label="Toggle theme"
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full bg-foreground transition-transform duration-300 ease-in-out ${
          isDark ? "translate-x-0" : "translate-x-[56px]"
        }`}
      >
        {isDark ? (
          <Moon color="#000000" size={24} />
        ) : (
          <Sun color="#ffffff" size={24} />
        )}
      </div>
    </button>
  );
}
