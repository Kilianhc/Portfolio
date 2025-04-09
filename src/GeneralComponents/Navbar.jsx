import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const sections = [
  { id: "about", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "technologies", label: "Tecnologías" },
  { id: "contact", label: "Contacto" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md")); // Verifica si la pantalla es pequeña

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // Cierra el drawer si estás en móvil
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography
            variant="h6"
            onClick={() => scrollToSection("hero")}
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            Kilian D. Hernández Chirino
          </Typography>

          {/* Mostrar hamburguesa solo en móvil */}
          {isMobile ? (
            <IconButton color="inherit" edge="end" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            // Mostrar los botones de navegación en pantallas grandes
            sections.map((section) => (
              <Button key={section.id} color="inherit" onClick={() => scrollToSection(section.id)}>
                {section.label}
              </Button>
            ))
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer lateral para móvil */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Box justifyContent="flex-end">
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {sections.map((section) => (
              <ListItem sx={{cursor:"pointer"}} button key={section.id} onClick={() => scrollToSection(section.id)}>
                <ListItemText primary={section.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
