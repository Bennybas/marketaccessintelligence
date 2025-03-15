import { User } from 'lucide-react';
import React from 'react'

const PatientSupport = () => {
    const supportInsights = [
        { desc: "Prior Authorization support program to assist healthcare providers with documentation.", bg: "bg-slate-50" },
        { desc: "Claims processing support to address the 38.3% rejection rate.", bg: "bg-slate-50" },
        { desc: "Copay assistance program to reduce patient out-of-pocket costs.", bg: "bg-slate-50" }
      ];
      
  return (
    <div className="w-full border border-gray-300 rounded-lg bg-white flex flex-col p-2">
    {/* Heading */}
        <h2 className="text-[14px] font-semibold text-gray-700 ">Patient Support Opportunities</h2>
        <span className='text-[10px] text-gray-700'>
        Programs to improve patient access and outcomes
        </span>

        <div className='flex flex-col gap-2 w-full py-2'>
            {
                supportInsights.map((insights,index)=>(
                    <div className={`flex w-full h-12 ${insights.bg} rounded-lg py-1 px-2 items-center gap-2`}>
                        <div className='rounded-full flex items-center justify-center p-1 bg-gray-700 w-5 h-5'>
                            <span className='text-white text-[10px]'>{index +1}</span>
                        </div>

                        <span className='text-[12px] text-gray-700'>
                            {insights.desc}
                        </span>
                    </div>
                ))
            }
        </div>
        <div className='flex justify-end ml-auto p-2'>
            <div className='flex items-center px-4 py-2 rounded-lg bg-[#0870a3] text-white w-full'>
                <span className='text-[14px] ml-auto'> Implement Support Programs</span>
            </div>

        </div>
        
    </div>
  )
}

export default PatientSupport