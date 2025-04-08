import React from "react";
import { Box, Container, Typography, Button, Fade } from "@mui/material";
import useVisibility from "../../Hooks/useVisibility";

const ContactSection = () => {
  const [ref, isVisible] = useVisibility(0.7);

  return (
    <Box id="contact" ref={ref} sx={{ padding: "80px 0", backgroundColor: "black", color: "#fff" }}>
      <Container>
        <Fade in={isVisible} timeout={2000}>
          <div>
            <Typography variant="h4" gutterBottom>
              Contacto
            </Typography>
            <Typography variant="body1" paragraph>
              Puedes contactarme a través de los siguientes medios:
            </Typography>
            <Button variant="contained" color="primary" href="https://www.linkedin.com/in/kilian-hern%C3%A1ndez-chirino-b84aa8168/" target="_blank" sx={{ marginRight: "10px" }}>
              LinkedIn
            </Button>
            <Button variant="contained" color="primary" href="https://github.com/Kilianhc" target="_blank">GitHub</Button>
            <Button variant="contained" color="primary" href="mailto:hkilian169@gmail.com" sx={{ marginLeft: "10px" }}>
              hkilian169@gmail.com
            </Button>
          </div>
        </Fade>
      </Container>
    </Box>
  );
};

export default ContactSection;
