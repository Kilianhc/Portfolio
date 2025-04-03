import React from "react";
import Navbar from "./GeneralComponents/Navbar";
import HeroSection from "./pages/HeroSection/HeroSection";
import AboutSection from "./pages/AboutSection/AboutSection";
import ProjectsSection from "./pages/ProjectsSection/ProjectsSection";
import TechnologiesSection from "./pages/TechnologiesSection/TechnologiesSection";
import ContactSection from "./pages/ContactSection/ContactSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechnologiesSection />
      <ContactSection />
    </div>
  );
}

export default App;
