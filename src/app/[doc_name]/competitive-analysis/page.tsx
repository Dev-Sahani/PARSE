import CategoryInformation from "./CategoryInformation";
import SimillarProducts from "./SimillarProducts";
import CompetetivePrice from "./CompetetivePrice";

export default function OverviewPage() {
  return <div>
    <div className="my-8">
      <h3 className="text-xl font-semibold">Category Information</h3>
      <CategoryInformation data={data}/>
    </div>
    <div className="my-12">
      <h3 className="text-xl font-semibold">Simillar Products</h3>
      <SimillarProducts data={data}/>
    </div>
    <div className="my-8">
      <h3 className="text-xl font-semibold">Competetive Price</h3>
      <CompetetivePrice />
    </div>
  </div>;
}

export type Data = {
    ProductName: string,
    Category: string,
    Sub_category: string,
    Price: number,
    Rating: number,
    No_rating: number,
    Discount: number,
    M_Spend: number,
    Supply_Chain_E: number,
    Sales_y: number,
    Sales_m: number,
    Market_T: number,
    Seasonality_T: number  
}

const data = {
  "ProductName": "CODE Sunscreen Gel Creme",
  "Category": "Beauty & Health",
  "Sub_category": "Skincare",
  "Price": 315,
  "Rating": 4.6,
  "No_rating": 5,
  "Discount": 10,
  "M_Spend": 2200,
  "Supply_Chain_E": 78.0,
  "Sales_y": 10600,
  "Sales_m": 883,
  "Market_T": 3.5,
  "Seasonality_T": 8.0
};
