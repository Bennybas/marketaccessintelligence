import React from 'react';
import { PieChart, Pie } from 'recharts';

const RADIAN = Math.PI / 180;
// Reducing overall dimensions to fit better in the card
const cx = 30;
const cy = 30;
const iR = 15; // Inner radius reduced
const oR = 25; // Outer radius reduced

const needle = (percentage, cx, cy, iR, oR, color) => {
  const ang = 180 * (1 - percentage / 100); // Convert percentage to angle
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 2; // Needle pivot radius reduced
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
  return (
    <div className="flex items-center justify-center h-full">
      <PieChart width={60} height={60}>
        <Pie
          data={[{ value: 100 }]} // Full circle
          startAngle={180}
          endAngle={0}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#e0e0e0"
          stroke="none"
        />
        {needle(percentage, cx, cy, iR, oR, '#fa0207')} 
      </PieChart>
    </div>
  );
};

export default GaugeChart;