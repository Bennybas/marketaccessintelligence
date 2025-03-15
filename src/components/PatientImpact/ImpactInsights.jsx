import { User } from 'lucide-react';
import React from 'react'

const ImpactInsights = () => {
    const impactInsights = [
        { desc: "30% Tier 3 placement results in higher out-of-pocket costs for patients, potentially affecting medication adherence and outcomes."
            ,bg:"bg-indigo-50"
         },
        { desc: "Prior Authorization requirements for 70% of products may delay treatment initiation by 3-5 days on average." 
            ,bg:"bg-yellow-50"
        },
        { desc: "Elevated claim rejection rate of 38.3% may lead to treatment abandonment in approximately 7.7% of cases."
            ,bg:"bg-indigo-50"
         },
        { desc: "Patient assistance programs should be prioritized for ANTHEM BLUE CROSS (CA) due to high access barriers to ensure therapy initiation and adherence."
            ,bg:"bg-yellow-50"
         }
      ];
      
  return (
    <div className="w-full border border-gray-300 rounded-lg bg-white flex flex-col p-2">
    {/* Heading */}
        <h2 className="text-[14px] font-semibold text-gray-700 ">Patient Impact Insights</h2>
        <span className='text-[10px] text-gray-700'>
        How formulary positioning affects patient outcomes
        </span>

        <div className='flex flex-col gap-2 w-full py-2'>
            {
                impactInsights.map((insights,index)=>(
                    <div className={`flex w-full h-12 ${insights.bg} rounded-lg py-1 px-2 items-center gap-2`}>
                        <div className='rounded-full items-center p-1 bg-gray-700 w-5 h-5'>
                            <User className='w-3 h-3 text-white'/>
                        </div>

                        <span className='text-[12px] text-gray-700'>
                            {insights.desc}
                        </span>

                        
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default ImpactInsights