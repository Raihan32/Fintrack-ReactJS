import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Record from "./pages/record/Record";
import Login from "./pages/login/Login";
import Artikel from "./pages/Artikel/Artikel";
import Isiartikel from "./pages/isiartikel/Isiartikel";
import Course from "./pages/course/Course";
import CourseDetail from "./pages/course/CourseDetail/courseDetail";
import Lesson from "./pages/course/lessonDetail/lesson";
import Register from "./pages/Register/Register";
import Privacyolicy from "./pages/PrivacyPolicy/Privacyolicy";
import About from "./pages/about/About";
import Profile from "./components/Profile/Cardprofile";
import Error from "./pages/noFoundPage/Error";
import { useCookies } from "react-cookie";

function App() {
  return (
    <>
      
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/fr" element={<Record />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route exact path="/fa" element={<Artikel />} />
        <Route path="/fa/:id" element={<Isiartikel />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route exact path="/fc" element={<Course />} />
        <Route path="/fc/:id" element={<CourseDetail />} />
        <Route path="/privacyolicy" element={<Privacyolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
