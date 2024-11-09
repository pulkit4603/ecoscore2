import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import LandingPage from "@/pages/LandingPage";
import LogIn from "@/pages/LogIn";
import AnalyticsDash from "@/pages/IndividualAnalytics";
import ChallengesCompetitions from "./pages/Challenges";
import Leaderboard from "./pages/Leaderboard";
import JoinCompetitionForm from "./pages/JoinCompetitionForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/analytics" element={<AnalyticsDash />} />
        <Route path="/challenges" element={<ChallengesCompetitions />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/join-competition" element={<JoinCompetitionForm />} />
      </Routes>
    </Router>
  );
};

export default App;
