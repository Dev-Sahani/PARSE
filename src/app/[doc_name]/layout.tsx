import { ReactNode } from "react";
import Sidebar from "@/components/ui/Sidebar";
import Navbar from "@/components/ui/Navbar";

export default function ReportLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: {
    filename: string;
  };
}) {
  return (
    <div className="flex">
      <Sidebar filename={params.filename} />
      <div className="w-full">
        <Navbar />
        <main className="p-6 pt-0">{children}</main>
      </div>
    </div>
  );
}
