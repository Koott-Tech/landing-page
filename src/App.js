import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Text from "./components/Text";
import TypesOfTherapy from "./components/TypesOfTherapy";
import PickYourGuide from "./components/PickYourGuide";
import FAQ from "./components/FAQ";
import HowItWorks from "./components/HowItWorks";
import FormalFAQ from "./components/FormalFAQ";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Guide from "./components/Guide";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Text />
            <TypesOfTherapy />
            <PickYourGuide />
            <FAQ />
            <HowItWorks />
            <FormalFAQ />
            <Footer />
          </>
        } />
        <Route path="/guide" element={<Guide />} />
      </Routes>
    </Router>
  );
}

export default App;
