import React from 'react'
import { ChevronDown } from 'lucide-react'
import TierLevelDistribution from './TierLevelDistribution'
import RestrictionDistribution from './RestrictionDistribution'
import CompetitivePositioning from './CompetitivePositioning'
import MarketShareDistribution from './MarketShareDistribution'
const FormularyIntelligenceMain = () => {

    const filters =[
        "All Payer Type","All Accounts","All Categories","All Tiers","All Restrictions","All Products"
    ]
  return (
    <div className='overflow-y-auton w-full min-h-screen bg-indigo-50 rounded-lg p-2 border shadow-md'>
        <div className='flex flex-col gap-4'>
            <h2 className='text-md font-[500] text-gray-700'>
            2024 Advance Health Medicare Value Formulary Analysis: Renal Therapies
            </h2>

            <div className='flex gap-4 w-full justify-start'>
                { filters.map((filter,index) => (
                    <div className='rounded-lg border border-gray-300 flex items-center p-1 gap-2'>
                        <span className='text-[12px] text-gray-700'>
                            {filter}
                        </span>
                        <ChevronDown className='w-3 h-4'/>
                    </div>
                ))
                }

            </div>

            <div className='w-full bg-gray-300 h-[0.5px]'></div>


            <div className='flex gap-3 p-2 w-full'>
                <TierLevelDistribution />

                <RestrictionDistribution />

                <MarketShareDistribution />

            </div>

        </div>
        
    </div>
  )
}

export default FormularyIntelligenceMain