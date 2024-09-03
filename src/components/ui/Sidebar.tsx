"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ImHome } from "react-icons/im";
import { MdExplore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

export default function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={cn(
        "h-dvh px-2 md:px-4 bg-foreground text-background text-sm relative sticky top-0 overflow-hidden",
        `transition-all duration-300 ${isOpen ? "w-56" : "w-20"}`,
        className
      )}
    >
      <header className="mb-28">
        <button
          className="p-2 bg-background rounded-full text-foreground hidden lg:block absolute right-5 top-5 transition duration-300 transform hover:scale-125 hover:shadow-sidebarBtn"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <GoArrowLeft /> : <GoArrowRight />}
        </button>
      </header>

      <main className="w-full flex items-center">
        <ul className="h-full flex flex-col gap-4">
          {sidebarList.map((item) => (
            <li
              key={item.to}
              className={cn(
                "h-12 px-2 flex items-center justify-center sticky left-0",
                pathname == item.to && "bg-accent text-primary"
              )}
            >
              <Link href={item.to}>{item.icon ? item.icon : item.title}</Link>
            </li>
          ))}
        </ul>
        {isOpen && (
          <ul className="h-full w-full flex flex-col gap-4 leading-4">
            {sidebarList.map((item) => (
              <li
                key={item.to}
                className={cn(
                  "w-full h-12 flex items-center px-2",
                  pathname == item.to && "bg-accent text-primary"
                )}
              >
                <Link className="mt-1" href={item.to}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

const sidebarList = [
  {
    title: "Overview",
    icon: <ImHome className="w-6 h-6" />,
    to: "/report/overview",
  },
  {
    title: "Market Analysis",
    icon: <MdExplore className="w-8 h-8 ml-[-2px]" />,
    to: "/report/market-analysis",
  },
  {
    title: "Competitive Analysis",
    icon: <CgProfile className="w-6 h-6" />,
    to: "/report/competitive-analysis",
  },
];
