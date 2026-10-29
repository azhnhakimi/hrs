"use client";

import { useEffect, useState } from "react";
import { getTimeOfDay } from "@/app/helpers/helpers";

export default function DashboardGreeting({ name }: { name: String }) {
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    setGreeting(`Good ${getTimeOfDay("Asia/Kuala_Lumpur")}`);
  }, []);

  return (
    <h1 className="text-3xl font-bold">
      {greeting}, {name}
    </h1>
  );
}
