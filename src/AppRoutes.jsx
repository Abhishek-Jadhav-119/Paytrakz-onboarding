import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/dashboard/home/Home";
import Transaction from "./modules/dashboard/transactions/Transactions";
import Approvals from "./modules/dashboard/approvals/Approvals";
import Settings from "./modules/settings/Settings";
import EntryFields from "./modules/project/EntryFields";
import Stats from "./modules/dashboard/stats/Stats";
import CreateProjects from "./modules/dashboard/home/CreateProjects";
import AllEntries from "./modules/dashboard/home/AllEntries";
import Background from "./modules/onboarding/Background";
import SignIn_form from "./modules/onboarding/SignIn_form";
import SignUp_form from "./modules/onboarding/SignUp_form";
import ForgotPassword from "./modules/onboarding/ForgotPassword";
import PasswordVerification from "./modules/onboarding/PasswordVerification";
import ResetPassword from "./modules/onboarding/ResetPassword";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Login routes */}
        <Route path="/" element={<Background />}>
          <Route index element={<SignIn_form />} />
          <Route path="registration-form" element={<SignUp_form />} />
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/password-verification"
          element={<PasswordVerification />}
        />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Main dashboard routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/approvals" element={<Approvals />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/entry-fields" element={<EntryFields />} />
        <Route path="/all-entries" element={<AllEntries />} />
        <Route path="/create-project" element={<CreateProjects />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
