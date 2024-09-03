import { Data } from "./page"

interface Prop {
  data: Data
}

const pros: string[] = [
  "High-quality ingredients with a rich chocolate chip flavor",
  "Premium positioning with attractive packaging",
  "Wide range of cookie variants (including chocolate chip, fruit-flavored, and center-filled cookies)",
  "Crisp texture and balanced sweetness",
  "Affordable pricing compared to international premium cookie brands",
  "Strong brand reputation in the Indian market"
]
const cons: string[] = [
  "Limited availability in some regions, especially in international markets",
  "Competitors offer similar products at comparable or lower prices",
  "Some customers might find the cookies too sweet or rich",
  "Packaging size options may be limited, which might not cater to all customer needs (e.g., larger family packs)",
]
const conclusion : string = "Parle Milano stands out as a premium yet affordable cookie option, well-regarded for its rich flavor and quality ingredients. While it enjoys strong customer loyalty in the Indian market, addressing availability issues and expanding packaging options could further enhance its appeal."

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