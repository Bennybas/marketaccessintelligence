import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const marketShareData = [
  { name: "FARXIGA", value: 40 },
  { name: "VELTASSA", value: 30 },
  { name: "FOSRENOL", value: 20 },
  { name: "JYNARQUE", value: 10 },
];

const MarketShareDistribution = () => {
  const chartDom = useRef(null);

  useEffect(() => {
    if (!chartDom.current) return;

    const myChart = echarts.init(chartDom.current, null, {
      renderer: 'canvas',
      devicePixelRatio: window.devicePixelRatio * 2
    });

    const totalMarketShare = marketShareData.reduce((sum, item) => sum + item.value, 0);

    const option = {
      color: ['#c98b27', '#9bc0e2', '#004567', '#8295ae'],
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
      series: [
        {
          name: 'Market Share Distribution',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'outside',
            formatter: '{b}\n{c} ({d}%)',
            textStyle: {
              fontSize: 9,
              fontWeight: 500
            }
          },
          labelLine: {
            show: true,
            length: 20,
            length2: 12,
            smooth: true,
            lineStyle: {
              width: 1,
              type: 'solid'
            }
          },
          data: marketShareData
        }
      ],
      graphic: [
        {
          type: 'text',
          left: 'center',
          top: '42%',
          style: {
            text: 'Total',
            fontSize: 12,
            fontWeight: 400,
            fill: '#666'
          }
        },
        {
          type: 'text',
          left: 'center',
          top: '52%',
          style: {
            text: totalMarketShare.toString(),
            fontSize: 20,
            fontWeight: 600,
            fill: '#333'
          }
        }
      ]
    };

    myChart.setOption(option);

    const handleResize = () => {
      myChart.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      myChart.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-1/2 h-[22rem] border border-gray-300 rounded-xl bg-white flex flex-col p-2">
      <h2 className="text-[14px] font-semibold text-gray-700">Market Share Distribution</h2>
      <span className="text-[10px] text-gray-700 mb-3">Renal therapy market share by product</span>
      <div ref={chartDom} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default MarketShareDistribution;
