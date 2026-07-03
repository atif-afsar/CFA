 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Archive from "./pages/Archive";
import LegalNotice from "./pages/LegalNotice";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="archive" element={<Archive />} />
          <Route path="legal-notice" element={<LegalNotice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
