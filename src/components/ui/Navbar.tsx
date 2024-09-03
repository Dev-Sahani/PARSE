import { ddmonthyyyy } from "@/lib/dates";
import Image from "next/image";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";

export default function Navbar({ showDownload = true }) {
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
              <MdOutlineFileDownload className="w-10 h-10" />
              <IoShareSocialSharp className="w-8 h-8" />
            </div>
            <p className="text-xs">{ddmonthyyyy()}</p>
          </div>
        )}
      </div>
    </nav>
  );
}
