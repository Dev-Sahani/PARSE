"use client";

import { ddmonthyyyy } from "@/lib/dates";
import Image from "next/image";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";

export default function Navbar({ showDownload = true }) {

  const handleDownload = () => {
    // The path should be relative to the 'public' directory
    const pdfPath = "/ParsedReport.pdf";
    
    // Create a link element
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = "ParsedReport";
    
    // Append to the body, click, and remove
    document.body.appendChild(link);

    console.log(link.getAttribute('href'))
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="w-full p-6 bg-background">
      <div className="p-4 bg-primary flex items-center justify-between text-background">
        <div className="flex items-center gap-4">
          <Image src="/logo.svg" alt="logo" width={60} height={60} />
          <div>
            <h1 className="text-3xl font-bold">PARSE REPORT</h1>
            <p className="text-xs">by team UDAAN</p>
          </div>
        </div>

        {showDownload && (
          <div className="flex flex-col gap-2 justify-center items-end">
            <div className="flex gap-4 items-center">
              <button onClick={handleDownload}>
                <MdOutlineFileDownload className="w-10 h-10" />
              </button>
              <button>
                <IoShareSocialSharp className="w-8 h-8" />
              </button>
            </div>
            <p className="text-xs">{ddmonthyyyy()}</p>
          </div>
        )}
      </div>
    </nav>
  );
}
