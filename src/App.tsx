import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import RefundStatusPage from "./pages/RefundStatusPage";
import ContactPage from "./pages/ContactPage";
import StateRefundListPage from "./pages/StateRefundListPage";
import ServiceDetails from "./pages/ServiceDetails";
import SignupPage from "./pages/SignupPage";
import SignInPage from "./pages/SignInPage";

function setToken(userToken: string) {
  try {
    localStorage.setItem("token", userToken);
  } catch (e) {
    console.log("Error while creating session.. " + e);
  }
}

function getToken(): string | null {
  try {
    const tokenString = localStorage.getItem("token");
    console.log(tokenString);
    const userToken = JSON.parse(tokenString);
    return userToken;
  } catch (e) {
    console.log("error :::::: " + e);
    return null;
  }
}


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


        <Route path="/auth/signin" element={<SignInPage setToken={setToken} />} />
        <Route path="/auth/signup" element={<SignupPage setToken={setToken} />} />

      </Routes>
    </Router>
  );
}

