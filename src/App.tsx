import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import RefundStatusPage from "./pages/RefundStatusPage";
import ContactPage from "./pages/ContactPage";
import StateRefundListPage from "./pages/StateRefundListPage";
import ServiceDetails from "./pages/ServiceDetails";

// Import other pages as they're created 
const ServicesPage = () => <div className="py-16 px-4 sm:px-6 lg:px-8">Our Services</div>;

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/refund-status" element={<RefundStatusPage />} />
        <Route path="/refund-status/state-refunds" element={<StateRefundListPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service/:slug" element={<ServiceDetails />} />


        <Route path="/signin" element={<h1>Sign In</h1>} />
        <Route path="/signup" element={<h1>Sign Up</h1>} />

      </Routes>
    </Router>
  );
}

