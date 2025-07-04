import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Text from "./components/Text";
import TypesOfTherapy from "./components/TypesOfTherapy";
import PickYourGuide from "./components/PickYourGuide";

function App() {
  return (
    <>
      <HeroSection />
      <Text />
      <TypesOfTherapy />
      <PickYourGuide />
    </>
  );
}

export default App;
