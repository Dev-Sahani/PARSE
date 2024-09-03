import { ReactNode } from "react";
import Sidebar from "@/components/ui/Sidebar";
import Navbar from "@/components/ui/Navbar";

export default function ReportLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: {
    doc_name: string;
  };
}) {
  console.log(params);
  return (
    <div className="flex">
      <Sidebar filename={params.doc_name} />
      <div className="w-full">
        <Navbar />
        <main className="p-6 pt-0">{children}</main>
      </div>
    </div>
  );
}
