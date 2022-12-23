import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from './component/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import { Routes, Route } from "react-router-dom";
import Record from './pages/record/Record';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/fr" element={<Record />} />
    </Routes>
    <Footer />

    </>
  );
}

export default App;
