import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const tierData = [
  { name: "Tier 2", value: 55 },
  { name: "Tier 3", value: 30 },
  { name: "Tier 1", value: 15 }
];

const COLORS = ['#c98b27', '#9bc0e2', '#004567'];

const TierPlacement = () => {
  return (
    <div className="w-1/2 h-[20rem] border border-gray-300 rounded-xl bg-white flex flex-col p-2">
      {/* Heading remains at the top */}
      <h2 className="text-[14px] font-semibold text-gray-700">Tier Placement</h2>
      <span className="text-[10px] text-gray-700 mb-3">Formulary tier placement for renal therapies</span>

      {/* Pie Chart centered inside remaining space */}
      <div className="flex flex-grow items-center justify-center">
        <PieChart width={250} height={250}>
          <Pie
            data={tierData}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={3}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {tierData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default TierPlacement;
