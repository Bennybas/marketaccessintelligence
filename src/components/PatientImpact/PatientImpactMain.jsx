import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import ImpactInsights from './ImpactInsights';
import PatientSupport from './PatientSupport';

const RADIAN = Math.PI / 180;
const cx = 30;
const cy = 30;
const iR = 15; 
const oR = 25; 

// Function to get color based on severity level
const getSeverityColor = (value) => {
  if (value <= 33) return "#22c55e"; // Green for low risk
  if (value <= 66) return "#f59e0b"; // Amber for medium risk
  return "#dc2626"; // Red for high risk
}

// Function to determine needle color based on percentage
const getNeedleColor = (percentage) => {
  return getSeverityColor(percentage);
}

const needle = (percentage, cx, cy, iR, oR, color) => {
  const ang = 180 * (1 - percentage / 100);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 2;
  const x0 = cx; 
  const y0 = cy;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key="pivot" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path key="needle" d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} Z`} fill={color} />,
  ];
};

const GaugeChart = ({ percentage }) => {
  // Create data for the colored gauge sections
  const data = [
    { name: 'Low', value: 33, color: '#22c55e' },
    { name: 'Medium', value: 33, color: '#f59e0b' },
    { name: 'High', value: 34, color: '#dc2626' }
  ];
  
  const needleColor = getNeedleColor(percentage);

  return (
    <div className="flex items-center justify-center h-full">
      <PieChart width={60} height={60}>
        <Pie
          data={data}
          startAngle={180}
          endAngle={0}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {needle(percentage, cx, cy, iR, oR, needleColor)}
      </PieChart>
    </div>
  );
};

const PatientImpactMain = () => {
  const firstrowcard = [
    {
      title: "Average Out-of-Pocket Cost",
      value: "$58.92",
      desc: "Per prescription for COMMERCIAL patients",
      bg: "bg-[#0870a3]",
      text: "text-white",
      check: false
    },
    {
      title: "Treatment Delay Risk",
      value: "Moderatly High",
      desc: "Based on 70% PA requirement rate",
      bg: "bg-white",
      check: true,
      text: "text-gray-700",
      percentage: 70
    },
    {
      title: "Abandonment Risk",
      value: "Very High",
      desc: "Based on 38.3% claim rejection rate",
      bg: "bg-white",
      text: "text-gray-700",
      check: true,
      percentage: 85
    }
  ];

  return (
    <div className='w-full flex flex-col gap-4 bg-gray-50 p-4'>
      <div className='flex w-full gap-4'>
        {firstrowcard.map((card, index) => (
          <div key={index} className={`flex flex-col w-[33.3%] h-28 rounded-xl ${card.bg} ${card.text} border p-2`}>
            <span className='text-[13px] font-[500]'>
              {card.title}
            </span>
            <div className='flex w-full justify-between items-center'>
              <span className='text-[16px] font-[500] mt-1'>
                {card.value}
              </span>
              {card.check ? (
                <div className="h-16 w-16">
                  <GaugeChart percentage={card.percentage} />
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <span className='text-[11px] mt-auto'>
              {card.desc}
            </span>
          </div>
        ))}
      </div>

      <div className='flex w-full gap-4'>
        <ImpactInsights />
      </div>
      <div className='flex w-full gap-4'>
        <PatientSupport />
      </div>
    </div>
  );
};

export default PatientImpactMain;