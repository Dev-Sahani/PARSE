"use client";

import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function PieChartComponent({
  data,
  height,
  width,
  dataKey,
  tooltipKey = "name",
  colors = ["#141414", "#D5e43C", "#22C55E", "#8B8B8B"],
}: {
  data: object[];
  dataKey: string;
  height: number;
  width: number;
  tooltipKey?: string;
  colors?: string[];
}) {
  return (
    <ResponsiveContainer width={width} height={height} className="bg-secondary">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={65}
          outerRadius={100}
          dataKey={dataKey}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip key={tooltipKey} />
      </PieChart>
    </ResponsiveContainer>
  );
}
