"use client";

import { useState } from "react";
import { TIME_RANGE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Interval = (typeof TIME_RANGE)[number];

export default function Header({ companyName }: { companyName: string }) {
  const [interval, setInterval] = useState<Interval>("TIME_SERIES_DAILY");

  return (
    <header className="w-full flex flex-col gap-2">
      <h5 className="text-lg sm:text-xl font-bold">Stock Analysis</h5>
      <div className="px-2 py-1 w-full flex justify-between items-center gap-4 bg-secondary text-base sm:text-lg">
        <p className="text-base font-medium">{companyName}</p>
        <div className="flex gap-2 text-white">
          {TIME_RANGE.map((key, index) => (
            <div key={index} className="flex gap-2 items-center">
              {index !== 0 && <p>|</p>}
              <p
                onClick={() => setInterval(key)}
                className={cn(
                  "text-sm cursor-pointer",
                  interval === key && "text-primary font-medium"
                )}
              >
                {key.substring(12)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
