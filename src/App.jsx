import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Navbar from "./GeneralComponents/Navbar";
import HeroSection from "./pages/HeroSection/HeroSection";
import AboutSection from "./pages/AboutSection/AboutSection";
import ProjectsSection from "./pages/ProjectsSection/ProjectsSection";
import TechnologiesSection from "./pages/TechnologiesSection/TechnologiesSection";
import ContactSection from "./pages/ContactSection/ContactSection";
import Footer from "./GeneralComponents/Footer";

// Crear los temas claro y oscuro
const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff", // Fondo claro
      paper: "black",   // Color para componentes como Paper
    },
    text: {
      primary: "#000000", // Texto oscuro
      secondary: "#333333"
    },
    primary: {
      main: "#1976d2"    // Color primario
    }
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "black", // Fondo oscuro
      paper: "#1a1a1a"    // Color para componentes como Paper
    },
    text: {
      primary: "#ffffff", // Texto claro
      secondary: "#252440"
    },
    primary: {
      main: "#417cea"     // Color primario para modo oscuro
    }
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div style={{ minHeight: '100vh', backgroundColor: 'background.default' }}> {/* Usa el color del tema */}
        <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
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