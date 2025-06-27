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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/airport-transfers" element={<AirportTransfer />} />
        <Route path="/intercity-rides" element={<IntercityRides />} />
        <Route path="/events" element={<Events />} />
        <Route path="/corporate-hire" element={<CorporateHire />} />
        <Route path="/book" element={<BookOnline />} />
      </Routes>
    </div>
  );
}

const Root = () => (
  <BrowserRouter>
    <ScrollToTop /> {/* 👈 add here */}
    <App />
  </BrowserRouter>
);

export default Root;
