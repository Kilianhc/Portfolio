import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => (
  <AppBar position="sticky" sx={{ backgroundColor: "#1976d2" }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Kilian D. Hernández Chirino
      </Typography>
      <Button color="inherit" onClick={() => document.getElementById("hero").scrollIntoView({ behavior: "smooth" })}>
        Inicio
      </Button>
      <Button color="inherit" onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
        Sobre mí
      </Button>
      <Button color="inherit" onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
        Proyectos
      </Button>
      <Button color="inherit" onClick={() => document.getElementById("technologies").scrollIntoView({ behavior: "smooth" })}>
        Tecnologías
      </Button>
      <Button color="inherit" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
        Contacto
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
