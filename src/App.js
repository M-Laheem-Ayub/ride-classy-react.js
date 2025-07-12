import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/home/Home";
import AirportTransfer from "./pages/services/airport-transfer/AirportTransfer";
import IntercityRides from "./pages/services/intercity-rides/IntercityRides";
import Events from "./pages/services/event/Events";
import CorporateHire from "./pages/services/corporate-hire/CorporateHire";
import Contact from "./pages/contact/Contact";
import BookOnline from "./pages/book-online/BookOnline";
import Admin from "./pages/admin/Admin";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import PageWrapper from "./components/PageWrapper";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Payment from "./pages/Payment";

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <MainLayout>
              <PageWrapper>
                <Home />
              </PageWrapper>
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <PageWrapper>
                <Contact />
              </PageWrapper>
            </MainLayout>
          }
        />
        <Route
          path="/airport-transfers"
          element={
            <MainLayout>
              <PageWrapper>
                <AirportTransfer />
              </PageWrapper>
            </MainLayout>
          }
        />
        <Route
          path="/intercity-rides"
          element={
            <MainLayout>
              <PageWrapper>
                <IntercityRides />
              </PageWrapper>
            </MainLayout>
          }
        />
        <Route
          path="/events"
          element={
            <MainLayout>
              <PageWrapper>
                <Events />
              </PageWrapper>
            </MainLayout>
          }
        />
        <Route
          path="/corporate-hire"
          element={
            <MainLayout>
              <PageWrapper>
                <CorporateHire />
              </PageWrapper>
            </MainLayout>
          }
        />
        <Route
          path="/book-online"
          element={
            <MainLayout>
              <PageWrapper>
                <BookOnline />
              </PageWrapper>
            </MainLayout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <MainLayout>
              <PageWrapper>
                <PrivacyPolicy />
              </PageWrapper>
            </MainLayout>
          }
        />

        {/* ✅ New Payment Page Route */}
        <Route
          path="/payment"
          element={
              <Payment />
          }
        />
     
        {/* Admin route without header/footer */}
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
