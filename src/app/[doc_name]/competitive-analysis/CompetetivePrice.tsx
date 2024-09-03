import PieChartComponent from "@/components/graphs/PieChartComponent"
import PriceDistributionChart from "@/components/graphs/PriceDistribution"
import NumberCard from "@/components/ui/NumberCard"

export default () => {
  return (
  <div className="p-6 bg-secondary flex justify-between items-center">
    <PriceDistributionChart />
    <div className="relative">
      <h3 className="z-10 max-w-24 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">Sales from company</h3>
      <PieChartComponent
        data={[
          { name: "sales from company", value: 15 },
          { name: "others", value: 100 - 15 },
        ]}
        dataKey="value"
        tooltipKey="name"
        width={330}
        height={290}
      />
    </div>
    {/* <NumberCard
      title="Simillar Products count"
      number={11}
      percentage={89}
      type="sale"
    /> */}
  </div>)
}