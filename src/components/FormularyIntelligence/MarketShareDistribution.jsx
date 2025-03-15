import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const marketShareData = [
  { name: "FARXIGA", value: 40 },
  { name: "VELTASSA", value: 30 },
  { name: "FOSRENOL", value: 20 },
  { name: "JYNARQUE", value: 10 },
];

const MarketShareDistribution = () => {
  return (
    <div className="w-1/2 h-[20rem] border border-gray-300 rounded-lg bg-white flex flex-col p-2">
      {/* Heading */}
      <h2 className="text-[14px] font-semibold text-gray-700 mb-3">MarketShare Distribution</h2>

      {/* Bar Chart */}
      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={marketShareData}
            margin={{ top: 20, right: 10, left: -25 }}
            barSize={70}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#666" }}
            />
            <YAxis
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#666" }}
              domain={[0, 50]}
              width={30}
            />
            <Tooltip
              contentStyle={{ fontSize: "12px", background: "#fff", border: "1px solid #ccc" }}
              cursor={{ fill: "rgba(55, 121, 153, 0.1)" }}
            />
            <Bar
              dataKey="value"
              fill="#55b2e0"
              radius={[10, 10, 10, 10]}
              
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarketShareDistribution;
