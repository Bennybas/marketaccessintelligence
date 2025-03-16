import { User } from 'lucide-react';
import React from 'react'

const DataDrivenRecommendation = () => {
    const RecommendationsInsights = [
        { desc: "Prioritize contract negotiations with ANTHEM BLUE CROSS (CA) to improve tier placement and reduce restrictions.", priority: "High", impact: "Significant", bg: "bg-slate-50" },
        { desc: "Develop PA support programs to assist healthcare providers in navigating authorization requirements.", priority: "High", impact: "Significant", bg: "bg-slate-50" },
        { desc: "Implement claims processing support to address the 38.3% rejection rate and improve reimbursement success.", priority: "Medium", impact: "Moderate", bg: "bg-slate-50" },
        { desc: "Leverage market leadership position in communications with payers during contract negotiations.", priority: "Medium", impact: "Moderate", bg: "bg-slate-50" }
      ];

      
  return (
    <div className="w-full border border-gray-300 rounded-lg bg-white flex flex-col p-2">
    {/* Heading */}
        <h2 className="text-[14px] font-semibold text-gray-700 ">Data-Driven Recommendations</h2>
        <span className='text-[10px] text-gray-700'>
        Strategic actions to improve market access
        </span>

        <div className='flex flex-col gap-2 w-full py-2'>
            {
                RecommendationsInsights.map((insights,index)=>(
                    <div className={`flex flex-col ${insights.bg} rounded-lg py-1 px-2 gap-2`}>
                        <div className={`flex w-full items-center gap-2`}>
                            <div className='rounded-full flex items-center justify-center p-1 bg-gray-700 w-5 h-5'>
                                <span className='text-white text-[10px]'>{index +1}</span>
                            </div>

                            <span className='text-[12px] text-gray-700'>
                                {insights.desc}
                            </span>
                        </div>
                        <div className='flex gap-4 ml-6'>
                            <div className='flex px-2 py-1 rounded-lg justify-center items-center  bg-lime-100 text-lime-700 text-[10px] w-24'>
                               Priority: {insights.priority}
                            </div>
                            <div className='flex px-2 py-1 rounded-lg justify-center items-center  bg-red-100 text-red-700 text-[10px] w-28'>
                                Impact: {insights.impact}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='flex justify-end ml-auto p-2'>
            <div className='flex items-center px-4 py-2 rounded-lg bg-[#0870a3] text-white w-full'>
                <span className='text-[14px] ml-auto'> 
                Generate New Recommendations</span>
            </div>

        </div>
        
    </div>
  )
}

export default DataDrivenRecommendation