import React from 'react'
import DataDrivenRecommendation from './DataDrivenRecommendation'
import ExpectedOutcome from './ExpectedOutcome'
import GenAiBased from './GenAiBased'

const RecomndationMain = () => {
  return (
    <div className='w-full flex flex-col gap-4 bg-gray-50 p-4'>

    
        <div className='flex w-full gap-4'>
            <DataDrivenRecommendation />
        </div>

        <div className='flex w-full gap-4'>
            <ExpectedOutcome />
           
        </div>
        <div className='flex w-full gap-4'>
        <GenAiBased />
        </div>
    </div>
  )
}

export default RecomndationMain