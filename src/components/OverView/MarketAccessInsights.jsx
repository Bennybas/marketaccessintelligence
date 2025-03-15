import {TrendingUp } from 'lucide-react';
import React from 'react'

const MarketAccessInsights = () => {

    const accessinsights = [
        {
          description: "Access Barriers Index for renal therapies is 64/100, indicating moderate market access conditions."
        },
        {
          description: "ANTHEM BLUE CROSS (CA) formulary places 30% of renal therapy products in Tier 3, resulting in higher patient out-of-pocket costs."
        },
        {
          description: "Prior Authorization requirements affect 70% of products, creating potential delays in treatment initiation and additional administrative burden."
        },
        {
          description: "Claim rejection rate of 38.3% indicates opportunities for process improvement in the reimbursement workflow."
        }
      ];
      
  return (
    <div className="w-1/2 h-[22rem] border border-gray-300 rounded-xl bg-white flex flex-col p-2">
        <div className='flex flex-col gap-1'>
            <h2 className="text-[14px] font-semibold text-gray-700">Market Access Insights</h2>
            <span className='text-[10px] text-gray-700'>
            Key insights based on 2024 formulary data
            </span>
        </div>
        <div className='flex flex-col gap-2 mt-2'>
            {
                accessinsights.map((insights)=>(
                    <div className='flex bg-gray-100 w-full h-16 gap-4 items-center p-2 rounded-xl'>
                        <div className='rounded-full items-center p-1 bg-[#004567] w-5 h-5'>
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

export default MarketAccessInsights