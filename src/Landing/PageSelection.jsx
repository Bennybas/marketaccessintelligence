import React from 'react';
import { CheckCircle, Check, ArrowRight, Award, FileCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PageSelection = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Formulary Intelligence",
      info: "Uncover hidden market access barriers, payer restrictions, and formulary shifts",
      keyFeatures: [
        "Coverage & Access Landscape",
        "Competitive Positioning & Benchmarking",
        "Pricing & Reimbursement Optimization"
      ],
      buttonText: "Explore Formulary Intelligence",
      gradientFrom: "from-[#4d9dc4]",
      gradientTo: "to-[#004567]",
      iconColor: "text-[#c98b27]",
      icon: Award,
      navigate_to:'/formulary-intelligence'
    },
    {
      title: "Contract Validation",
      info: "Ensure PBM adherence, validate rebates, and optimize reimbursement",
      keyFeatures: [
        "Payer & PBM Strategy Insights",
        "Contract Discrepancies & Compliance Validation",
        "GenAI-Powered Contract Analysis"
      ],
      buttonText: "Explore Contract Validation",
      gradientFrom: "from-[#4d9dc4]",
      gradientTo: "to-[#004567]",
      iconColor: "text-[#c98b27]",
      icon: FileCheck,
      navigate_to:'/contract-validation'
    }
  ];

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`h-2 bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo}`}></div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className={`mr-3 ${service.iconColor}`} size={24} />
                  <h2 className="text-xl font-bold text-gray-800">{service.title}</h2>
                </div>
                
                <p className="text-gray-600 mb-6 text-[12px]">{service.info}</p>
                
                <h3 className="font-semibold text-gray-700 mb-4 flex items-center text-[15px]">
                  <CheckCircle className={`mr-2 ${service.iconColor}`} size={18} />
                  Key features
                </h3>
                
                <ul className="space-y-3 mb-8">
                  {service.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className={`flex-shrink-0 p-1 rounded-full mr-3 ${service.iconColor} bg-opacity-10 flex items-center justify-center`}>
                        <Check className={service.iconColor} size={14} />
                      </div>
                      <span className="text-gray-700 text-[13px]">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                onClick={()=> navigate(service.navigate_to)}
                  className={`w-full py-3 px-6 text-white font-medium rounded-lg bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} hover:opacity-90 transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center`}
                >
                  <span>{service.buttonText}</span>
                  <ArrowRight className="ml-2" size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageSelection;