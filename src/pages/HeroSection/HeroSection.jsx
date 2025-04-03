import React from "react";
import { Box, Typography, Fade } from "@mui/material";
import useVisibility from "../../Hooks/useVisibility";

const HeroSection = () => {
    const [ref, isVisible] = useVisibility(0.7);
  
    return (
      <Box
        ref={ref}
        id="hero"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1976d2",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Fade in={isVisible} timeout={2000}>
          <div>
            <Typography variant="h2" gutterBottom>
              Kilian Hernández
            </Typography>
            <Typography variant="h5">Desarrollador Web</Typography>
          </div>
        </Fade>
      </Box>
    );
  };
  
  export default HeroSection;
