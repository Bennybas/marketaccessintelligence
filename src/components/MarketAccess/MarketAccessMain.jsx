import React from 'react'
import TierPlacement from './TierPlacement'
import ClaimsVolumeAnalysis from './ClaimsVolumeAnalysis'
import CompetitiveInsights from './CompetitiveInsights'

const MarketAccessMain = () => {
  return (
    <div className='w-full flex flex-col gap-4 bg-gray-50 p-4'>
       <div className='flex w-full gap-4'>
        <TierPlacement />
        <ClaimsVolumeAnalysis />
       </div>
       <div className='flex w-full'>
        <CompetitiveInsights />

       </div>
    </div>
  )
}

export default MarketAccessMain