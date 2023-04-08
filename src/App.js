import './App.css';
import { Route, Routes } from "react-router";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Appointments from './components/Appointments';
import Reviews from './components/Review';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Appointments" element={<Appointments />} />
        <Route path="Reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
