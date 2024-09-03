import { ReactNode } from "react";
import Sidebar from "@/components/ui/Sidebar";
import Navbar from "@/components/ui/Navbar";

export default function ReportLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full overflow-hidden">
        <Navbar />
        <main className="p-6 pt-0">{children}</main>
      </div>
    </div>
  );
}
