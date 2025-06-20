import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/home/Home";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);





export default Root; 
