import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import LandingPage from "@/pages/LandingPage";
import LogIn from "@/pages/LogIn";
import AnalyticsDash from "@/pages/IndividualAnalytics";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/analytics" element={<AnalyticsDash />} />
      </Routes>
    </Router>
  );
};

export default App;
