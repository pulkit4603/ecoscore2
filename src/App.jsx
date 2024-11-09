import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import LandingPage from "@/pages/LandingPage";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import AnalyticsDash from "@/pages/IndividualAnalytics";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/analytics" element={<AnalyticsDash />} />
      </Routes>
    </Router>
  );
};

export default App;
