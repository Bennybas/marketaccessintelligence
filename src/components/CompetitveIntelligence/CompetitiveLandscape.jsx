import { Component, TrendingUp } from 'lucide-react';
import React from 'react'

const CompetitiveLandscape = () => {

    const competitiveInsights = [
        { description: "AFARXIGA leads with 69.8% market share, followed by JYNARQUE at 12.5%.",
            bg:'bg-blue-50',text:'text-blue-700'
         },
        { description: "ANTHEM BLUE CROSS (CA)'s formulary design creates significant barriers for market access, challenging product adoption and growth.",
             bg:'bg-green-50',text:'text-green-700'
         },
        { description: "Competitive analysis shows 30% Tier 3 placement rate for renal therapies, compared to industry average of 65%.",
             bg:'bg-blue-50',text:'text-blue-700'
         },
        { description: "High PA requirements (70%) create opportunities for products with streamlined access or superior support services.",
             bg:'bg-green-50',text:'text-green-700'
         }
      ];
      
  return (
    <div className="w-full  border border-gray-300 rounded-xl bg-gray-700 flex flex-col p-2">
      {/* Heading */}
      <div className='flex p-1 gap-2 items-center'>
        <Component className='text-white w-4 h-4'/>
        <h2 className="text-[14px] font-semibold text-white">Competitive Landscape</h2>

      </div>
      
      <span className="text-[10px] text-white ml-3 px-4 pb-4">Key competitive insights for strategic planning</span>

      <div className='flex flex-col gap-2 bg-white w-full p-2 rounded-xl'>
        {
            competitiveInsights.map((insight,index) => (
                <div className={`flex ${insight.bg} w-full h-12 gap-4 items-center p-2 rounded-xl`}>
                    <div className='rounded-full items-center p-1 bg-gray-700 w-5 h-5'>
                        <TrendingUp className='w-3 h-3 text-white'/>
                    </div>
                    <span className={`text-[13px] ${insight.text}`}>
                        {insight.description}
                    </span>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default CompetitiveLandscape