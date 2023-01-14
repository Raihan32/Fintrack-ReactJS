import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Record from "./pages/record/Record";
import Login from "./pages/login/Login";
import Artikel from "./pages/Artikel/Artikel";
import Isiartikel from "./pages/isiartikel/Isiartikel";
import Course from "./pages/course/Course";
import CourseDetail from "./pages/course/CourseDetail/CourseDetail";
import Lesson from "./pages/course/lessonDetail/Lesson";
import Register from "./pages/Register/Register";
import Privacyolicy from "./pages/PrivacyPolicy/Privacyolicy";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/fr" element={<Record />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fa" element={<Artikel />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/isiartikel" element={<Isiartikel />} />
        <Route exact path="/fc" element={<Course />} />
        <Route path="/fc/:id" element={<CourseDetail />} />
        <Route path="/privacyolicy" element={<Privacyolicy />} />
        {/* <Route path="/isiartikel" element={<Isiartikel />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
