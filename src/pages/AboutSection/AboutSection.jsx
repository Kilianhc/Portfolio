import React from "react";
import { Container, Typography, Box, Fade } from "@mui/material";
import useVisibility from "../../Hooks/useVisibility";

const AboutSection = () => {
    const [ref, isVisible] = useVisibility(0.7);
  
    return (
      <Box id="about" ref={ref} sx={{ padding: "80px 0", backgroundColor: "#f4f4f4" }}>
        <Container>
          <Fade in={isVisible} timeout={2000}>
            <div>
              <Typography variant="h4" gutterBottom>
                Sobre mí
              </Typography>
              <Typography variant="body1" paragraph>
                Soy un desarrollador frontend apasionado por crear experiencias interactivas. Me encanta resolver problemas y aprender nuevas tecnologías.
              </Typography>
            </div>
          </Fade>
        </Container>
      </Box>
    );
  };
  
  export default AboutSection;
