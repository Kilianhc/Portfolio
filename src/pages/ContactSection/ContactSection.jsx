import React from "react";
import { Box, Container, Typography, Button, Fade } from "@mui/material";
import useVisibility from "../../Hooks/useVisibility";

const ContactSection = () => {
    const [ref, isVisible] = useVisibility(0.7);
  
    return (
      <Box id="contact" ref={ref} sx={{ padding: "80px 0", backgroundColor: "#1976d2", color: "#fff" }}>
        <Container>
          <Fade in={isVisible} timeout={2000}>
            <div>
              <Typography variant="h4" gutterBottom>
                Contacto
              </Typography>
              <Typography variant="body1" paragraph>
                Puedes contactarme a través de las siguientes redes sociales:
              </Typography>
              <Button variant="contained" color="primary" sx={{ marginRight: "10px" }}>
                LinkedIn
              </Button>
              <Button variant="contained" color="primary">GitHub</Button>
            </div>
          </Fade>
        </Container>
      </Box>
    );
  };
  
  export default ContactSection;
