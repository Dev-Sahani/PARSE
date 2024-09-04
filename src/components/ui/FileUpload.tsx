"use client";

import { ChangeEvent, useState } from "react";
import { ImFolderUpload } from "react-icons/im";
import { extractData } from "@/app/api/uplaod-pdf";
import PieChartComponent from "@/components/graphs/PieChartComponent";
import { useRouter } from "next/navigation";
import Loading from "./Loading/Loading";

export default function FileUpload({ text = "Choose File" }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [isNotAllowed, setIsNotAllowed] = useState<number>(-1);
  const router = useRouter();

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setIsNotAllowed(-1);
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
      try {
        if (res.status === 500) {
          window.alert(res.message || "Something went wrong");
        } else if (res.status === 406) {
          window.alert("PDF has missing value. Therefore it cannot be parse.");
          setIsNotAllowed(res.completeness_percentage);
        } else if (res.status === 200) {
          console.log(res);
          console.log(res.data);
          await new Promise((resolve) => setTimeout(() => resolve(100), 5000));
          router.push(
            `/${file.name?.split(" ").join("_").split(".")[0]}/overview`
          );
        }
      } catch (err) {}
    }
    setLoading(false);
  };

  if (loading) return <Loading />;

  return (
    <div className="flex min-h-64 justify-between items-strech bg-secondary">
      <div className="w-full min-h-64 h-full flex flex-col gap-6 justify-center items-center">
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
      {isNotAllowed !== -1 && (
        <div className="relative flex items-center justify-center">
          <h3 className="max-w-20 text-center absolute top-[44%] right-[40%] leading-4 font-semibold">
            Completion Ratio
          </h3>
          <PieChartComponent
            data={[
              { name: "Completion Ratio", value: isNotAllowed },
              { name: "Incomplete", value: 100 - isNotAllowed },
            ]}
            height={280}
            width={400}
            dataKey="value"
            tooltipKey="name"
          />
        </div>
      )}
    </div>
  );
}
