import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => (
  <AppBar position="sticky" sx={{ backgroundColor: "black" }}>
    <Toolbar>
      <Typography variant="h6" onClick={() => document.getElementById("hero").scrollIntoView({ behavior: "smooth" })} sx={{ flexGrow: 1, cursor:"pointer" }}>
        Kilian D. Hernández Chirino
      </Typography>
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
