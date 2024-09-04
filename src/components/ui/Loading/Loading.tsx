"use client";
import { useState, useEffect } from "react";
import "@/components/ui/Loading/style.css";

export default function Loading() {
  const allStates = ["Extracting Text", "Analyzing Text"] as const;
  const [state, setState] = useState<number>(0);

  useEffect(() => {
    const stateTimeout = setTimeout(() => {
      setState((prev) => (prev + 1) % allStates.length);
    }, 10000);

    return () => clearTimeout(stateTimeout);
  }, [state]);

  return (
    <div className="w-full min-h-[80vh] flex flex-col gap-6 justify-center items-center">
      <div className="typewriter" style={{ scale: 1.5 }}>
        <div className="slide">
          <i></i>
        </div>
        <div className="paper"></div>
        <div className="keyboard"></div>
      </div>
      <p className="animate-pulseOpacity font-semibold">
        {state > -1 && allStates[state]}
      </p>
    </div>
  );
}
