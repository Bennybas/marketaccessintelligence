import React from 'react'
import MarketSharePositioning from './MarketSharePositioning'
import AccessStrategyComparison from './AccessStrategyComparison'
import CompetitiveLandscape from './CompetitiveLandscape'

const CompetitiveIntelligenceMain = () => {
  return (
    <div className='w-full flex flex-col gap-4 bg-gray-50 p-4'>
       <div className='flex w-full gap-4'>
        <MarketSharePositioning />
        <AccessStrategyComparison />
        
       </div>
       <div className='flex w-full'>
        <CompetitiveLandscape />

       </div>
    </div>
  )
}

export default CompetitiveIntelligenceMain