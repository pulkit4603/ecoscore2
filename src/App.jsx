import { Route, Routes } from "react-router-dom";

import Dashboard from "@/pages/Dashboard";
import LandingPage from "@/pages/LandingPage";
import LogIn from "@/pages/LogIn";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
};

export default App;
