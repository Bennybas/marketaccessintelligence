import React from 'react'

const AccessStrategyComparison = () => {

    const accessStrategyData = [
        {
          description: "Tier 3 Placement Rate",
          value: "30%",
          note: "Industry average: 65%",
        },
        {
          description: "Prior Authorization Rate",
          value: "70%",
          note: "Creates opportunities for streamlined access",
        },
        {
          description: "Claim Rejection Rate",
          value: "38.3%",
          note: "Opportunity for process improvement",
        },
      ];
  return (
    <div className="w-1/2 h-[20rem] border border-gray-300 rounded-lg bg-white flex flex-col p-2">
    {/* Heading */}
        <h2 className="text-[14px] font-semibold text-gray-700 ">Access Strategy Comparison</h2>
        <span className='text-[10px] text-gray-700'>
        Comparison to industry averages
        </span>

        <div className='flex flex-col gap-2 w-full p-2 rounded-xl'>
            {
                accessStrategyData.map((access,index)=>(
                    <div key={index} className='flex flex-col w-full gap-1 p-2 rounded-xl bg-blue-100'>
                        <span className='text-[13px] font-semibold text-gray-700'>
                            {access.description}
                        </span>
                        <div className='flex w-full gap-2 items-center'>
                            <div className='w-full h-2 bg-white/50 rounded-full'>
                                <div className="h-2 bg-blue-500 rounded-full "  style={{ width: `${access.value}` }} ></div>
                            </div>
                            <span className='text-[13px] font-semibold text-gray-700'>
                                {access.value}
                            </span>
                        </div>

                        <span className='text-[12px] font-semibold text-gray-500'>
                            {access.note}
                        </span>
                        
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AccessStrategyComparison