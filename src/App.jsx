import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Record from "./pages/record/Record";
import Login from "./pages/login/Login";

import Artikel from "./pages/Artikel/Artikel";
// import Isiartikel from "./pages/isiartikel/Isiartikel";
import Course from "./pages/course/Course";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fr" element={<Record />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fa" element={<Artikel />} />
        {/* <Route path="/isiartikel" element={<Isiartikel />} /> */}
        <Route path="/fc" element={<Course />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
