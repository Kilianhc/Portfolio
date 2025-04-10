import React from "react";
import { Box, Container, Typography, Button, Fade, Stack } from "@mui/material";
import useVisibility from "../../Hooks/useVisibility";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const [ref, isVisible] = useVisibility(0.3);
  const { t } = useTranslation();
  
  return (
    <Box id="contact" ref={ref} sx={{padding: "50px 0", backgroundColor: "black", color: "#fff", textAlign: "center"}}>
      <Container>
        <Fade in={isVisible} timeout={2000}>
          <Box>
            <Typography variant="h4" gutterBottom textAlign="left">
              {t("contact.title")}
            </Typography>
            <Typography variant="body1" paragraph>
              {t("contact.text")}
            </Typography>
            <Stack spacing={2} alignItems="center" mt={4}>
              {/* Botón de correo */}
              <Button variant="contained" color="primary" href="mailto:hkilian169@gmail.com" sx={{ width: "250px" }}>
                hkilian169@gmail.com
              </Button>
              {/* Botón de LinkedIn */}
              <Button variant="contained" startIcon={<FaLinkedin />} sx={{ backgroundColor: "#0e76a8", width: "250px", "&:hover": { backgroundColor: "#085b8d" } }}
                href="https://www.linkedin.com/in/kilian-hern%C3%A1ndez-chirino-b84aa8168/" target="_blank">
                LinkedIn
              </Button>
              {/* Botón de GitHub */}
              <Button variant="contained" startIcon={<FaGithub />} sx={{ backgroundColor: "#333", width: "250px", "&:hover": { backgroundColor: "#111" } }}
                href="https://github.com/Kilianhc" target="_blank">
                GitHub
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default ContactSection;
