import {React,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { ChartLine,Activity,House, UserCheck, Settings } from 'lucide-react';
import OverViewMain from '../components/OverView/OverViewMain';
import MarketAccessMain from '../components/MarketAccess/MarketAccessMain';
import CompetitiveIntelligenceMain from '../components/CompetitveIntelligence/CompetitiveIntelligenceMain';
import PatientImpactMain from '../components/PatientImpact/PatientImpactMain';


const LandingPageV2 = () => {
    const navigate = useNavigate();

    const [activePage, setActivePage] = useState('Overview')

    const navigations = [
        { name: "Overview",icon:House,path:"Overview" },
        { name: "Market Access",icon:Activity,path:"Market-Access" },
        { name: "Competitive Intelligence",icon:ChartLine,path:"Competitive" },
        { name: "Patient Impact",icon:UserCheck,path:"Patient"},
        { name: "Recommendations",icon:Settings,path:"Recommendations" }
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
        }
    }


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

                <div className='flex flex-col gap-3 pl-2'>
                    {navigations.map((nav, index) => (
                        <div 
                            key={index}
                            onClick={() => setActivePage(nav.path)}
                            className={`flex py-2 px-2 items-center rounded-l-xl text-[15px] cursor-pointer gap-2
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
            
            <div className='w-[80%] overflow-y-auto '>
                {/* Main content area */}
                {renderContent()}
            </div>
        </div>
    );
};

export default LandingPageV2;
