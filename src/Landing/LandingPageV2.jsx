import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { ChartLine, Activity, House, UserCheck, Settings, ChevronDown, BookmarkPlus } from 'lucide-react';
import OverViewMain from '../components/OverView/OverViewMain';
import MarketAccessMain from '../components/MarketAccess/MarketAccessMain';
import CompetitiveIntelligenceMain from '../components/CompetitveIntelligence/CompetitiveIntelligenceMain';
import PatientImpactMain from '../components/PatientImpact/PatientImpactMain';
import RecomndationMain from '../components/Recommendation/RecomndationMain';


const LandingPageV2 = () => {
    const navigate = useNavigate();

    const [activePage, setActivePage] = useState('Overview');
    const [openFilter, setOpenFilter] = useState(null);

    const navigations = [
        { name: "Overview", icon: House, path: "Overview" },
        { name: "Market Access", icon: Activity, path: "Market-Access" },
        { name: "Competitive Intelligence", icon: ChartLine, path: "Competitive" },
        { name: "Patient Impact", icon: UserCheck, path: "Patient"},
        { name: "Recommendations", icon: BookmarkPlus, path: "Recommendations" },
        { name: "Settings", icon: Settings, path: "Settings" }
    ];

    const renderContent = () => {
        switch (activePage) {
            case "Overview":
                return <OverViewMain />
            case "Market-Access":
                return <MarketAccessMain />
            case "Competitive":
                return <CompetitiveIntelligenceMain />
            case "Patient":
                return <PatientImpactMain />
            case "Recommendations":
                return <RecomndationMain />
        }
    }

    const filterOptions = {
        "All Payer Type": ["Medicare", "Medicaid", "Commercial"],
        "All Accounts": ["Advance Health", "Aetna", "ALAMEDA ALLIANCE FOR HEALTH", "ALIGNMENT HEALTH PLAN", "Ameri Health"],
        "All Categories": ["SGLT2 Inhibitor", "Phosphate Binder", "V2-Receptor Antagonist", "Potassium Binder", "Non-steroidal MRA"],
        "All Tiers": ["1", "2", "3", "4"],
        "All Restrictions": ["PA", "LA", "MO"],
        "All Products": ["AURYXIA", "CALCIUM ACETATE", "FARXIGA", "FOSRENOL", "KERENDIA", "VELPHORO", "LOKELMA", "RENVELA", "VELTASSA", "JYNARQUE", "RENAGEL"]
    };

    const filters = Object.keys(filterOptions);

    const toggleFilter = (filterName) => {
        if (openFilter === filterName) {
            setOpenFilter(null);
        } else {
            setOpenFilter(filterName);
        }
    };


    return (
        <div className='w-full h-screen flex py-1'>
            <div className='w-[20%] bg-[#1c739e] rounded-r-2xl flex flex-col pl-2 py-2 justify-between h-full'>
                <div className='flex flex-col items-center gap-2'>
                    <div className='flex flex-col gap-2 rounded-full bg-white p-2 w-[5rem] h-[5rem] items-center justify-center border-4 border-x-[#c98b27]'>
                        <img
                            src="/Basic_Ui_(186).jpg"
                            alt="Logo"
                            className="h-12 w-12 cursor-pointer"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[14px] font-[500] text-white'>
                            Alex Johnson
                        </span>
                        <span className='text-[12px] font-[500] text-white'>
                            alex@gmail.com
                        </span>
                    </div>
                </div>

                <div className='flex flex-col gap-2 pl-2'>
                    {navigations.map((nav, index) => (
                        <div 
                            key={index}
                            onClick={() => setActivePage(nav.path)}
                            className={`flex py-2 px-2 items-center rounded-l-xl text-[14px] cursor-pointer gap-2
                                ${
                                    activePage === nav.path
                                    ? "bg-white text-gray-700"
                                    : "text-white hover:bg-white/20"
                                }
                            `}
                        >
                            <div className='rounded-full items-center p-1 bg-gray-700 w-5 h-5'>
                                    <nav.icon className='w-3 h-3 text-white'/>
                            </div>
                            <span>
                            {nav.name}
                            </span>
                            
                        </div>
                    ))}
                </div>
                <div className='pr-2'>
                <div className='flex justify-center items-center rounded-lg bg-white p-1 w-full'>
                    <img
                        onClick={() => navigate('/')}
                        src="/chryselys.png"
                        alt="Logo"
                        className="h-12 w-auto cursor-pointer"
                    />
                </div>

                </div>
                
            </div>
            
            <div className='w-[80%] overflow-y-auto bg-gray-50'>
                <div className='p-2'>

               
                <div className="py-2 px-4 flex justify-start items-center w-full gap-8 bg-white rounded-xl border">
                    <div className="flex">
                        <span className='text-[18px] font-[500] text-[#004567]'>{activePage}</span>
                    </div>

                    <div className="flex gap-4 justify-center items-center">
                        {filters.map((filter, index) => (
                            <div key={index} className="relative">
                                <div 
                                    className="rounded-lg border border-gray-300 flex items-center p-1 px-2 gap-2 bg-white cursor-pointer hover:bg-gray-50"
                                    onClick={() => toggleFilter(filter)}
                                >
                                    <span className="text-[12px] text-gray-700">{filter}</span>
                                    <ChevronDown className={`w-3 h-4 transition-transform ${openFilter === filter ? 'transform rotate-180' : ''}`} />
                                </div>
                                
                                {openFilter === filter && (
                                    <div className="absolute z-10 mt-1 w-48 max-h-60 overflow-y-auto bg-white rounded-md shadow-lg border border-gray-200">
                                        <div className="py-1">
                                            {filterOptions[filter].map((option, optionIndex) => (
                                                <div
                                                    key={optionIndex}
                                                    className="px-3 py-2 text-[12px] text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                </div>

                {/* Main content area */}
                {renderContent()}
            </div>
        </div>
    );
};

export default LandingPageV2;