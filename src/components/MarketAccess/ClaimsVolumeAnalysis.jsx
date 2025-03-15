import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const claimsData = [
  { month: 'Jan', Commercial: 400, Medicare: 300, Medicaid: 200 },
  { month: 'Feb', Commercial: 450, Medicare: 320, Medicaid: 220 },
  { month: 'Mar', Commercial: 470, Medicare: 350, Medicaid: 240 },
  { month: 'Apr', Commercial: 500, Medicare: 380, Medicaid: 260 },
  { month: 'May', Commercial: 530, Medicare: 390, Medicaid: 280 },
  { month: 'Jun', Commercial: 550, Medicare: 410, Medicaid: 300 },
  { month: 'Jul', Commercial: 600, Medicare: 430, Medicaid: 320 },
  { month: 'Aug', Commercial: 620, Medicare: 450, Medicaid: 340 },
  { month: 'Sep', Commercial: 640, Medicare: 470, Medicaid: 360 },
  { month: 'Oct', Commercial: 660, Medicare: 490, Medicaid: 380 },
  { month: 'Nov', Commercial: 680, Medicare: 500, Medicaid: 390 },
  { month: 'Dec', Commercial: 700, Medicare: 520, Medicaid: 400 },
];

const ClaimsVolumeAnalysis = () => {
  return (
    <div className="w-1/2 h-[20rem] border border-gray-300 rounded-xl bg-white flex flex-col p-2">
      {/* Heading */}
      <h2 className="text-[14px] font-semibold text-gray-700">Claims Volume Analysis</h2>
      <span className="text-[10px] text-gray-700 mb-3">Monthly claims by payer segment</span>

      {/* Line Chart */}
      <div className="flex-grow flex items-center justify-center">
        <ResponsiveContainer width="95%" height="90%">
          <LineChart data={claimsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Commercial" stroke="#c98b27" strokeWidth={2} />
            <Line type="monotone" dataKey="Medicare" stroke="#9bc0e2" strokeWidth={2} />
            <Line type="monotone" dataKey="Medicaid" stroke="#004567" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ClaimsVolumeAnalysis;
