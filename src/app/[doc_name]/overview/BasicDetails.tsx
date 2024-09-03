import { Data } from "./page"
import PieChartComponent from "@/components/graphs/PieChartComponent"

interface Prop {
  data: Data
}

export default ({ data }: Prop) => {
  return <div className="p-6 bg-secondary">
    <div className="flex justify-between h-full w-full">
      <div className="w-[60%]">
        {/* Heading of Product */}
        <h1 className="text-4xl font-bold my-2">{data.ProductName}</h1>
        
        {/* Bullets Points Details */}
        <ul className="grid grid-flow-col grid-rows-3 grid-cols-5 gap-y-4 text-sm my-6">
          <li className="flex justify-between font-semibold row-span-1 col-span-2">
            Category : <span className="font-normal">{data.Category}</span>
          </li>
          <li className="flex justify-between font-semibold row-span-1 col-span-2">
            Sub-Category : <span className="font-normal">{data.Sub_category}</span>
          </li>
          <li className="flex justify-between font-semibold row-span-1 col-span-2">
            Initial Qauntity : <span className="font-normal">{null}</span>
          </li>
          <li className="flex justify-between font-semibold row-span-1 col-start-4 col-span-2">
            Selling Price : <span className="font-normal">{data.Price}</span>
          </li>
          <li className="flex justify-between font-semibold row-span-1 col-start-4 col-span-2">
            Discount : <span className="font-normal">{data.Price - data.Price * data.Discount/100}</span>
          </li>
          <li className="flex justify-between font-semibold row-span-1 col-start-4 col-span-2">
            Profit : <span className="font-normal">{data.Discount}</span>
          </li>
        </ul>

        {/* Descriptions */}
        <div>
          <span className="text-sm font-semibold my-2">Description: </span>
          The Wild Stone CODE Sunscreen Gel Creme is a versatile, dermatologically tested product suitable for all skin types. It offers broad-spectrum protection with SPF 30, making it ideal for daily use, particularly during summer and festive seasons.
        </div>
      </div>

      {/* Donut Graph chart */}
      <div className="relative">
        <h3 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">Success ration</h3>
        <PieChartComponent
          data={[
            { name: "Success Ratio", value: 82 },
            { name: "", value: 100 - 82 },
          ]}
          dataKey="value"
          tooltipKey="name"
          width={330}
          height={290}
        />
      </div>
    </div>
  </div>
}