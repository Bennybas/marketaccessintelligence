import LandingPage from "./Landing/LandingPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./Layout";
import FormularyIntelligenceMain from "./components/FormularyIntelligence/FormularyIntelligenceMain";
import ContractValidationMain from "./components/ContractValidation/ContractValidationMain";
import LandingPageV2 from "./Landing/LandingPageV2";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPageV2 />} />
          <Route path="/formulary-intelligence" element={<FormularyIntelligenceMain />} />
          <Route path="/contract-validation" element={<ContractValidationMain />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
