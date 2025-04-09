import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles"; // Importar ThemeProvider y createTheme
import Navbar from "./GeneralComponents/Navbar";
import HeroSection from "./pages/HeroSection/HeroSection";
import AboutSection from "./pages/AboutSection/AboutSection";
import ProjectsSection from "./pages/ProjectsSection/ProjectsSection";
import TechnologiesSection from "./pages/TechnologiesSection/TechnologiesSection";
import ContactSection from "./pages/ContactSection/ContactSection";
import Footer from "./GeneralComponents/Footer";

const theme = createTheme(); 

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <div>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechnologiesSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
