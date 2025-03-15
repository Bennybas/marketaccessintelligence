import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  { subject: 'Tier Placement', value: 80, fullMark: 100 },
  { subject: 'Prior Auth', value: 60, fullMark: 100 },
  { subject: 'Claim Rejection', value: 70, fullMark: 100 },
  { subject: 'Step Therapy', value: 50, fullMark: 100 },
  { subject: 'Quantity Limits', value: 90, fullMark: 100 },
];

const AccessBarriers = () => {
  return (
    <div className="w-1/2 h-[22rem] border border-gray-300 rounded-xl bg-white flex flex-col p-2">
      {/* Heading */}
      <h2 className="text-[14px] font-semibold text-gray-700">Access Barriers  Analysis</h2>
      <span className="text-[10px] text-gray-700 mb-3">Breakdown of access restrictions by type</span>
      {/* Radar Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name="Access Barriers" dataKey="value" stroke="#ff7300" fill="#ff7300" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AccessBarriers;
