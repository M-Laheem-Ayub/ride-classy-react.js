import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import AirportTransfer from "./pages/services/airport-transfer/AirportTransfer";
import ScrollToTop from "./components/ScrollToTop";
import IntercityRides from "./pages/services/intercity-rides/IntercityRides";
import Events from "./pages/services/event/Events";
import CorporateHire from "./pages/services/corporate-hire/CorporateHire";
import Contact from "./pages/contact/Contact";
import BookOnline from "./pages/book-online/BookOnline";
import Admin from "./pages/admin/Admin";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <Routes>
      {/* Normal Routes */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }
      />
      <Route
        path="/airport-transfers"
        element={
          <MainLayout>
            <AirportTransfer />
          </MainLayout>
        }
      />
      <Route
        path="/intercity-rides"
        element={
          <MainLayout>
            <IntercityRides />
          </MainLayout>
        }
      />
      <Route
        path="/events"
        element={
          <MainLayout>
            <Events />
          </MainLayout>
        }
      />
      <Route
        path="/corporate-hire"
        element={
          <MainLayout>
            <CorporateHire />
          </MainLayout>
        }
      />
      <Route
        path="/book-online"
        element={
          <MainLayout>
            <BookOnline />
          </MainLayout>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <MainLayout>
            <PrivacyPolicy />
          </MainLayout>
        }
      />

      {/* Admin Route - NO HEADER/FOOTER */}
      <Route path="/admin/*" element={<Admin />} />
    </Routes>
  );
}

const Root = () => (
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);

export default Root;
