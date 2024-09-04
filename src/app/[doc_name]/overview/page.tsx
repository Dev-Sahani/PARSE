import { getBasicDetails } from "@/app/api/getOverviewData";
import BasicDetails from "./BasicDetails";
import OtherImages from "./OtherImages";
import TextualAnalysis from "./TextualAnalysis";

export default async function OverviewPage({
  params,
}: {
  params: { doc_name: string };
}) {
  const data = (await getBasicDetails(params.doc_name)) as Data;
  console.log("Data = ", data);
  if (!("Product Name" in data)) {
    return <div>Data cannot be fetched</div>;
  }

  return (
    <div>
      <div className="my-4">
        <h3 className="text-xl font-semibold">Basic Details</h3>
        <BasicDetails data={data} />
      </div>
      <div className="my-8">
        <h3 className="text-xl font-semibold">Other Images</h3>
        <OtherImages data={data} />
      </div>
      <div className="my-4">
        <h3 className="text-xl font-semibold">Textual Analysis</h3>
        <TextualAnalysis data={data} />
      </div>
    </div>
  );
}

export type Data = {
  "Product Name": string;
  Category: string;
  Sub_category: string;
  Price: number;
  Rating: number;
  No_rating: number;
  Discount: number;
  M_Spend: number;
  Supply_Chain_E: number;
  Sales_y: number;
  Sales_m: number;
  Market_T: number;
  Seasonality_T: number;
  "Completeness percentage": string;
};

const data = {
  ProductName: "CODE Sunscreen Gel Creme",
  Category: "Beauty & Health",
  Sub_category: "Skincare",
  Price: 315,
  Rating: 4.6,
  No_rating: 5,
  Discount: 10,
  M_Spend: 2200,
  Supply_Chain_E: 78.0,
  Sales_y: 10600,
  Sales_m: 883,
  Market_T: 3.5,
  Seasonality_T: 8.0,
};
