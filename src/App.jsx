import { Route, Routes } from "react-router-dom";

import Dashboard from "@/pages/Dashboard";
import LandingPage from "@/pages/LandingPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
