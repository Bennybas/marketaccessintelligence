import React from 'react'

const ExpectedOutcome = () => {

    const ExpectedOutcomeData = [
        { description: "Tier Placement", current: "30% in Tier 3", target: "15% in Tier 3", value: "15%", timeline: "9 months" },
        { description: "Prior Authorization Rate", current: "70%", target: "50%", value: "20%", timeline: "6 months" },
        { description: "Claim Rejection Rate", current: "38.3%", target: "25%", value: "13.3%", timeline: "4 months" },
        { description: "Patient Out-of-Pocket Cost", current: "$58.92", target: "$35.00", value: "23.92%", timeline: "12 months" }
      ];
      
      
  return (
    <div className="w-full border border-gray-300 rounded-lg bg-white flex flex-col p-2">
    {/* Heading */}
        <h2 className="text-[14px] font-semibold text-gray-700 ">Expected Outcome Analysis</h2>
        <span className='text-[10px] text-gray-700'>
        Projected improvements from recommendations
        </span>

        <div className='flex flex-col gap-2 w-full p-2 rounded-xl'>
            {
                ExpectedOutcomeData.map((outcome,index)=>(
                    <div key={index} className='flex flex-col w-full gap-1 p-2 rounded-xl bg-blue-50'>
                        <span className='text-[13px] font-semibold text-gray-700'>
                            {outcome.description}
                        </span>
                        <div className='flex w-full gap-2 items-center'>
                            <div className='w-full h-2 bg-white/50 rounded-full'>
                                <div className="h-2 bg-cyan-700 rounded-full "  style={{ width: `${outcome.value}` }} ></div>
                            </div>
                            <span className='text-[13px] font-semibold text-gray-700'>
                                {outcome.value}
                            </span>
                        </div>

                        <div className='flex w-full justify-between items-center'>

                            <span className='text-[11px] font-semibold text-gray-500'>
                                Expected TimeLine: {outcome.timeline}
                            </span>
                            <span className='text-[11px] font-semibold text-gray-500'>
                                Target: {outcome.target}
                            </span>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ExpectedOutcome