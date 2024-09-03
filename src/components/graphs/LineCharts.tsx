"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { formatNumber } from "@/lib/typeConvertion";

type Props<T> = {
  data: T;
  xAxis?: string;
  xAxisFormatter?: (val: string) => string;
  lineKey: string;
};

export default function LineCharts<T extends object[]>({
  data,
  xAxis,
  xAxisFormatter,
  lineKey,
}: Props<T>) {
  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="4 4" />
          {xAxis ? <XAxis dataKey={xAxis} /> : <XAxis />}
          <YAxis
            tickFormatter={(value) => formatNumber(value, 1)}
            domain={[]}
          />
          <Tooltip
            formatter={(value: number, name: string) => [
              formatNumber(value, 1),
              "value",
            ]}
          />
          <Line fill={"#141414"} dataKey={lineKey as string} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
