import React from "react";
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
  Switch,
  useMediaQuery,
  Paper
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const sections = [
  { id: "about", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "technologies", label: "Tecnologías" },
  { id: "contact", label: "Contacto" }
];

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "black" }}>
      <Toolbar>
        <Typography
          variant="h6"
          onClick={() => scrollToSection("hero")}
          sx={{ flexGrow: 1, cursor: "pointer", color: "white" }}
        >
          Kilian D. Hernández Chirino
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <Typography variant="body2" mr={1} sx={{ color: "white" }}>
            Modo Oscuro
          </Typography>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
        </Box>

        {isMobile ? (
          <>
            <IconButton color="inherit" edge="end" onClick={() => setOpen(true)}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <Paper 
                sx={{ 
                  width: 250, 
                  height: '100%',
                  bgcolor: darkMode ? 'black' : 'white',
                  color: darkMode ? 'white' : 'black'
                }}
              >
                <Box sx={{ p: 2 }}>
                  <Box display="flex" justifyContent="flex-end">
                    <IconButton onClick={() => setOpen(false)}>
                      <CloseIcon sx={{ color: darkMode ? 'white' : 'black' }} />
                    </IconButton>
                  </Box>
                  <List>
                    {sections.map((section) => (
                      <ListItem 
                        sx={{ 
                          cursor: "pointer",
                          color: darkMode ? 'white' : 'black'
                        }} 
                        button 
                        key={section.id} 
                        onClick={() => scrollToSection(section.id)}
                      >
                        <ListItemText primary={section.label} />
                      </ListItem>
                    ))}
                  </List>

                  <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                    <Typography variant="body2">Modo Oscuro</Typography>
                    <Switch checked={darkMode} onChange={toggleDarkMode} />
                  </Box>
                </Box>
              </Paper>
            </Drawer>
          </>
        ) : (
          sections.map((section) => (
            <Button 
              key={section.id} 
              sx={{ color: "white" }} 
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </Button>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;