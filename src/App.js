import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import AirportTransfer from "./pages/airport-transfer/AirportTransfer";
import ScrollToTop from "./components/ScrollToTop";
import IntercityRides from "./pages/intercity-rides/IntercityRides";
import Events from "./pages/event/Events";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airport-transfers" element={<AirportTransfer />} />
        <Route path="/intercity-rides" element={<IntercityRides />} />
        <Route path="/events" element={<Events />} />
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
