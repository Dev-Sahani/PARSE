"use client";

import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, ReferenceLine } from 'recharts';

const data = [
  { price: 225, density: 0.001 },
  { price: 255, density: 0.003 },
  { price: 280, density: 0.008 },
  { price: 300, density: 0.011 },
  { price: 310, density: 0.021 },
  { price: 350, density: 0.009 },
  { price: 400, density: 0.013 },
  { price: 500, density: 0.018 },
  { price: 550, density: 0.010 },
  { price: 600, density: 0.005 },
  { price: 700, density: 0.002 },
  { price: 800, density: 0.001 },
  // Add more data points as needed
];

const PriceDistributionChart = () => {
  return (
    <ResponsiveContainer width={650} height={400}>
      <AreaChart data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
        dataKey="price" 
        label={{position: 'insideBottomRight', offset: 0}}
         />
        <YAxis 
        label={{ value: 'Probability Density', angle: -90, position: 'insideLeft' }}
         />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="density" stroke="#D5E43C" fill="#D5E43C" name="Price Distribution" />
        <ReferenceLine x={350} stroke="blue" strokeDasharray="3 3" label={{ position: 'top', value: 'Current Product: $110' }} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PriceDistributionChart;
