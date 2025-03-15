import {TrendingUp } from 'lucide-react';
import React from 'react'

const CompetitiveIntelligenceInsights = () => {

    const competitiveinsights = [
        {
          description: "Competitive Intelligence analysis reveals ANTHEM BLUE CROSS (CA) updates access criteria approximately every 90 days, requiring regular monitoring and strategy adjustment."
        },
        {
          description: "Market intelligence detected a significant increase in claim rejections, triggering an alert for market access team intervention."
        },
        {
          description: "Competitive analysis shows 30% Tier 3 placement is below industry average, informing contracting strategy."
        },
        {
          description: "Real-time competitive intelligence enables proactive identification of access barriers before they impact patient care and market performance."
        }
      ];
      
      
  return (
    <div className="w-1/2 h-[22rem] border border-gray-300 rounded-xl bg-white flex flex-col p-2">
        <div className='flex flex-col gap-1'>
            <h2 className="text-[14px] font-semibold text-gray-700">Competitive Intelligence Insights</h2>
            <span className='text-[10px] text-gray-700'>
            Key insights based on 2024 formulary data
            </span>
        </div>
        <div className='flex flex-col gap-2 mt-2'>
            {
                competitiveinsights.map((insights)=>(
                    <div className='flex bg-gray-100 w-full h-16 gap-4 items-center p-2 rounded-xl'>
                        <div className='rounded-full items-center p-1 bg-[#c98b27] w-5 h-5'>
                            <TrendingUp className='w-3 h-3 text-white'/>
                        </div>
                        <span className='text-[13px] text-gray-700'>
                            {insights.description}
                        </span>
                    </div>
                ))
            }

        </div>
        
    </div>
  )
}

export default CompetitiveIntelligenceInsights