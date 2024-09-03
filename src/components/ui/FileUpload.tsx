"use client";

import { ChangeEvent, useState } from "react";
import { Skeleton } from "./skeleton";
import { ImFolderUpload } from "react-icons/im";
import { extractData } from "@/app/api/uplaod-pdf";

export default function FileUpload({ text = "Choose File" }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [isNotAllowed, setisNotAllowed] = useState<boolean>(false);

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("filename", file.name?.split(" ").join("_"));

      const res = await extractData(formData);
      // const res = {
      //   status: 200,
      //   data: {
      //     "Product Name": "CODE Sunscreen Gel Creme",
      //     Category: "Beauty & Health",
      //     Sub_category: "Skincare",
      //     Price: 315,
      //     Rating: 4.6,
      //     No_rating: 5,
      //     Discount: 10,
      //     M_Spend: 2200,
      //     Supply_Chain_E: 78,
      //     Sales_y: 10600,
      //     Sales_m: 883,
      //     Market_T: 3.5,
      //     Seasonality_T: 5,
      //   },
      //   completeness_percentage: 100,
      // };
      if (res.status === 500) {
        window.alert(res.message || "Something went wrong");
      } else if (res.status === 406) {
        setisNotAllowed(true);
      } else if (res.status === 200) {
        console.log(res);
        console.log(res.data);
      }
    }
    setLoading(false);
  };

  if (loading) return <Skeleton className="w-full h-64" />;
  if (isNotAllowed) {
    return <div className="w-full h-full">Not Allowed</div>;
  }

  return (
    <div className="w-full h-64 bg-secondary flex flex-col gap-6 justify-center items-center">
      <ImFolderUpload className="w-16 h-16" />
      <p>
        Drag and Drop or{" "}
        <label className="text-accent-foreground font-semibold cursor-pointer">
          {text}
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>{" "}
        to upload it here.
      </p>
    </div>
  );
}
