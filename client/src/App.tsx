import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import SuccessStories from "@/pages/SuccessStories";
import News from "@/pages/News";
import Contact from "@/pages/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RemoveNegativeContentPage from "./pages/news/how-to-remove-negative-content";
import SecureIdentityPage from "./pages/news/secure-your-identity";
import PublicDataPreventionPage from "./pages/news/public-data-prevention";
import ContentRemovalLawsPage from "./pages/news/content-removal-laws";
import LinkedInBrandingPage from "./pages/news/linkedin-branding";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import PaymentPage from "./pages/PaymentPage";
import SeoService from "@/pages/SeoService";
import ParentalControls from "@/pages/services/ParentalControls";
import EmployeeDeviceManagement from "@/pages/services/EmployeeDeviceManagement";
import MobileCybersecurity from "@/pages/services/MobileCybersecurity";
import AntiTheft from "@/pages/services/AntiTheft";
import DigitalTraining from "@/pages/services/DigitalTraining";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/parental-controls" component={ParentalControls} />
      <Route
        path="/services/employee-device-management"
        component={EmployeeDeviceManagement}
      />
      <Route
        path="/services/mobile-cybersecurity"
        component={MobileCybersecurity}
      />
      <Route path="/services/anti-theft" component={AntiTheft} />
      <Route path="/services/digital-training" component={DigitalTraining} />
      <Route path="/services/seo" component={SeoService} />
      <Route path="/payment" component={PaymentPage} />
      <Route path="/success-stories" component={SuccessStories} />
      <Route path="/news" component={News} />
      <Route path="/contact" component={Contact} />
      <Route
        path="/news/how-to-remove-negative-content"
        component={RemoveNegativeContentPage}
      />
      <Route
        path="/news/secure-identity-data-brokers"
        component={SecureIdentityPage}
      />
      <Route
        path="/news/public-data-prevention"
        component={PublicDataPreventionPage}
      />
      <Route
        path="/news/content-removal-laws-2024"
        component={ContentRemovalLawsPage}
      />
      <Route
        path="/news/linkedin-personal-branding"
        component={LinkedInBrandingPage}
      />
      <Route path="/terms-of-service" component={TermsAndConditions} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" // You can switch to 'dark' or 'colored' if you like
      />
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default App;
