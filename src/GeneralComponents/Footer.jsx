import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {

  const { t } = useTranslation();

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
        {t("footer.text")}
      </Typography>
    </Box>
  );
};

export default Footer;
