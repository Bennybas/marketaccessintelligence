import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const tierData = [
  { name: "Tier 1", value: 500 },
  { name: "Tier 2", value: 300 },
  { name: "Tier 3", value: 200 },
  { name: "Tier 4", value: 100 },
];

const COLORS = ["#4CAF50", "#FF9800", "#2196F3", "#E91E63"]; // Custom tier colors

// Calculate total value for percentage calculation
const totalValue = tierData.reduce((sum, entry) => sum + entry.value, 0);

const RADIAN = Math.PI / 180;
const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const percent = ((tierData[index].value / totalValue) * 100).toFixed(1); // Calculate %

  return (
    <text x={x} y={y} fill="white" fontSize={12} textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {`${tierData[index].name} (${percent}%)`}
    </text>
  );
};

const TierLevelDistribution = () => {
  return (
    <div className="w-[32%] h-[20rem] border border-gray-300 rounded-lg bg-white flex flex-col p-2">
      {/* Heading */}
      <div className=" flex justify-start">
      <h2 className="text-[14px] font-semibold items-start text-gray-700 mb-2">Tier Level Distribution</h2>
        </div>
      {/* Pie Chart */}
      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={tierData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {tierData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TierLevelDistribution;
