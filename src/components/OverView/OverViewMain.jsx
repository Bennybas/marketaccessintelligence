import React from 'react'
import { ChartLine,Activity, NotebookText, ChartNoAxesColumn } from 'lucide-react';
import MarketShareDistribution from './MarketShareDistribution';
import AccessBarriers from './AccessBarriers';
import MarketAccessInsights from './MarketAccessInsights';
import CompetitiveIntelligenceInsights from './CompetitiveIntelligenceInsights';

const OverViewMain = () => {

    const firstrow_card = [
        {
          title: "Access Barriers Index",
          value: 50, // Convert to number for calculation
          description: "Moderate Barriers",
          icon: Activity
        },
        {
          title: "Market Share",
          value: 69.8,
          description: "FARXIGA leads in renal therapies",
          icon: ChartLine
        },
        {
          title: "Prior Authorization Rate",
          value: 70,
          description: "High Restriction",
          icon: NotebookText
        },
        {
          title: "Claim Rejection Rate",
          value: 38.3,
          description: "High Rejection Rate",
          icon: ChartNoAxesColumn
        },
    ];
  return (
    <div className='w-full flex flex-col gap-4 bg-gray-50 p-4'>
        <div className='flex w-full gap-4'>
                    {firstrow_card.map((card, index) => (
                        <div key={index} className='flex flex-col w-[25%] h-28 bg-[#c98b27]/90 rounded-xl p-[0.5px]'>
                            <div className='h-8 w-full flex justify-start bg-white rounded-t-xl p-2 gap-4'>
                                <div className='rounded-full items-center p-1 bg-gray-700 w-5 h-5'>
                                    <card.icon className='w-3 h-3 text-white'/>
                                </div>
                                
                                <span className='text-[12px] font-[500] text-gray-700'>
                                    {card.title}
                                </span>
                            </div>

                            <div className='p-2 flex w-full'>
                                <div className='flex flex-col justify-between p-1 w-full gap-1'>
                                    <span className='text-[18px] text-white font-[500]'>
                                        {card.value}%
                                    </span>
                                    <span className='text-[10px] text-white'>
                                        {card.description}
                                    </span>
                                    <div className='w-full h-2 bg-white/20 rounded-full'>
                                        <div className="h-2 bg-white rounded-full "  style={{ width: `${card.value}%` }} >
                                            
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex w-full gap-4'>
                    <MarketAccessInsights />

                    <CompetitiveIntelligenceInsights />
                </div>

                <div className='flex w-full gap-4'>
                   <AccessBarriers />
                   <MarketShareDistribution />
                </div>
    </div>
  )
}

export default OverViewMain