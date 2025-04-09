import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "20px 0",
        marginTop: "auto",
      }}
    >
      <Typography variant="body2">
        © 2025 Kilian D. Hernández Chirino. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
