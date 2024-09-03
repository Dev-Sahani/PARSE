import { Data } from "./page"

interface Prop {
  data: Data
}

const pros: string[] = [
  "Broad Market Appeal: The product is suitable for all skin types, including sensitive skin, making it a versatile option for a wide range of customers.",
  "High Profit Margins: The product offers a gross margin of around 50%, with 22% allocated to marketing, ensuring profitability.",
  "Dermatologically Tested: The sunscreen is dermatologically tested, which enhances consumer trust and can boost sales.",
  "Seasonal Sales Boost: The product has strong sales during summer and festive seasons, aligning well with peak retail periods.",
]
const cons: string[] = [
  "Competition: Sunscreen is a competitive market, and the product's unique selling points may need strong marketing to stand out.",
  "Seasonal Dependency: Sales are primarily driven by summer holidays and festive seasons, which could lead to fluctuations in demand during off-peak times.",
  "Price Sensitivity: The retail price, while competitive, may still be a consideration for price-sensitive customers, especially if similar products are available at lower prices.",
]
const conclusion : string = "The Wild Stone CODE Sunscreen Gel Creme offers a high-margin, dermatologically tested product suitable for all skin types, with peak sales during summer and festive seasons. However, it faces strong market competition and has seasonal sales dependencies, which could impact overall sales performance during off-peak periods."

export default ({ data }: Prop) => {
  return (
  <div className="p-6 bg-secondary">
    <div className="flex gap-8 justify-between h-full w-full">
      {/* Pros */}
      <div >
        <h3 className="font-semibold">Pros of {data.ProductName}</h3>
        <ul className="list-disc ml-6">
          {
            pros.map((el, ind) => (
              <li key={ind}>
                {el}
              </li>
            ))
          }
        </ul>
      </div>

      {/* Cons */}
      <div>
        <h3 className="font-semibold">Cons of {data.ProductName}</h3>
        <ul className="list-disc ml-6">
        {
            cons.map((el, ind) => (
              <li key={ind}>
                {el}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
    
    {/* Overall Conclusion */}
    <div className="mt-6">
      <h3 className="font-semibold">Overall Conclusion</h3>
      <p>
        {conclusion}
      </p>
    </div>
  </div>)
}