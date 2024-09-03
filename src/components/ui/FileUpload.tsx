"use client";

import { ChangeEvent, useState } from "react";
import { Skeleton } from "./skeleton";
import { ImFolderUpload } from "react-icons/im";
import { uploadFile } from "@/app/api/uplaod-pdf";

type Data = {
  data: object | null;
  completeness_percentage: number;
};

export default function FileUpload({ text = "Choose File" }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Data | null>(null);

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("filename", file.name);
      const res = await uploadFile(formData);
      if (res) setData(res);
      else window.alert("File cannot be found.");
    }
    setLoading(false);
  };

  if (loading) return <Skeleton className="w-full h-64" />;
  if (data) {
    return (
      <div className="w-full h-full">
        {JSON.stringify(data) || "Nothing is present in the pdf"}
      </div>
    );
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
