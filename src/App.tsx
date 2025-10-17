import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import AppointmentPage from "./pages/appointment";
import Gallery from "./pages/gallery";
import Construction from "./pages/construction";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/construction" element={<Construction />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
