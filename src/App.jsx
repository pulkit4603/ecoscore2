import { Route, Routes } from "react-router-dom";

import Dashboard from "@/pages/Dashboard";
import LandingPage from "@/pages/LandingPage";
import LogIn from "@/pages/LogIn";
import ContactPage from "@/routes/Contact";
import InvoicesPage from "@/routes/Dash.invoices";
import DashboardPage from "@/routes/Dash";
import SignInPage from "@/routes/Sign-in";
import SignUpPage from "@/routes/Sign-up";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
