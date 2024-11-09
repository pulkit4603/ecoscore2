import { Route, Routes } from "react-router-dom";

import Dashboard from "@/pages/Dashboard";
import LandingPage from "@/pages/LandingPage";
import LogIn from "@/pages/LogIn";
// import ContactPage from "@/routes/contact";
// import InvoicesPage from "@/routes/Dash.invoices";
// import DashboardPage from "@/routes/Dash";
// import SignInPage from "@/routes/Sign-in";
// import SignUpPage from "@/routes/Sign-up";
import AnalyticsDash from "@/pages/IndividualAnalytics";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LogIn />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/analytics" element={<AnalyticsDash />} />
      </Routes>
    </div>
  );
};

export default App;
