import NumberCard from "@/components/ui/NumberCard";
import { Data } from "./page"

interface Prop {
  data: Data
}

export default ({ data }: Prop) => (
  <div className="flex justify-start gap-32">
    <NumberCard
      title="Inventory Turnover"
      number={45634321}
      percentage={89}
      type="currency"
    />
    <NumberCard
      title="Gross margin"
      number={6546543}
      percentage={89}
      type="currency"
    />
  </div>
);