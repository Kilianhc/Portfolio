import React from "react";
import Navbar from "./GeneralComponents/Navbar";
import HeroSection from "./pages/HeroSection/HeroSection";
import AboutSection from "./pages/AboutSection/AboutSection";
import ProjectsSection from "./pages/ProjectsSection/ProjectsSection";
import TechnologiesSection from "./pages/TechnologiesSection/TechnologiesSection";
import ContactSection from "./pages/ContactSection/ContactSection";
import Footer from "./GeneralComponents/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechnologiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
