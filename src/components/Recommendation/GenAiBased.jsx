import { Component, TrendingUp } from 'lucide-react';
import React from 'react'

const GenAiBased = () => {

    const GenAiBasedInsights = [
        { title: "Trend Analysis", description: "AI analysis predicts a 15% improvement in market access conditions over the next 6 months if recommendations are implemented.", bg: "bg-blue-50", text: "text-blue-700" },
        { title: "Competitive Prediction", description: "AI predicts competitor products will face similar access barriers in the next 3-6 months, creating a strategic opportunity window.", bg: "bg-green-50", text: "text-green-700" },
        { title: "Patient Impact Forecast", description: "Implementation of support programs could reduce treatment abandonment by up to 25% and improve medication adherence by 18%.", bg: "bg-blue-50", text: "text-blue-700" }
      ];
      
      
  return (
    <div className="w-full border border-gray-300 rounded-xl bg-gray-700 flex flex-col p-2">
      {/* Heading */}
      <div className='flex p-1 gap-2 items-center'>
        <Component className='text-white w-4 h-4'/>
        <h2 className="text-[14px] font-semibold text-white">GenAI-Based Analysis</h2>

      </div>
      
      <span className="text-[10px] text-white ml-3 px-4 pb-4">AI-driven insights and predictions</span>

      <div className='flex flex-col gap-2 bg-white w-full p-2 rounded-xl'>
        {
            GenAiBasedInsights.map((insight,index) => (
                <div 
                key={index}
                className={`flex flex-col ${insight.bg} w-full gap-2 p-2 rounded-xl`}>
                    <div className='flex gap-3 items-center'>
                        <div className='rounded-full items-center p-1 bg-gray-700 w-5 h-5'>
                            <TrendingUp className='w-3 h-3 text-white'/>
                        </div>
                        <span className='text-[13px] font-[500]'>
                            {insight.title}

                        </span>
                    </div>
                   <div className='ml-8'>

                    <span className={`text-[13px] ${insight.text}`}>
                        {insight.description}
                    </span>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default GenAiBased