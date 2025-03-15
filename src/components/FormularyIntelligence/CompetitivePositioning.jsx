import React from 'react'

const CompetitivePositioning = () => {
  return (
    <div className="w-[35%] h-[20rem] border border-gray-300 rounded-lg bg-white flex flex-col p-2">
        <div className=" flex justify-start">
            <h2 className="text-[14px] font-semibold items-start text-gray-700 mb-2">Competitive Positioning Deep-Dive</h2>
        </div>

        <div className='w-full rounded-lg h-[7rem] flex flex-col bg-gray-100 gap-1 p-1'>
            <h3 className='text-[12px] text-gray-700 font-[500]'>
                Among phosphate binders, lower tier options have a significant competitive advantage over higher tier branded options.  
            </h3>
            <div className='w-full bg-gray-300 h-[0.5px]'></div>
            <span  className='text-[12px] text-gray-700'>
            Interpretation: This tier differentiation could significantly impact market share and patient choice, strongly favoring generic options.
            </span>

        </div>
    </div>
  )
}

export default CompetitivePositioning