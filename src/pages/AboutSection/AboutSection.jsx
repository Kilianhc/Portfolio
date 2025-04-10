import React, { useState } from "react";
import { Container, Typography, Box, Fade, Button, Grid } from "@mui/material";
import useVisibility from "../../Hooks/useVisibility";
import SeeMore from "../../GeneralComponents/SeeMore";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const [ref, isVisible] = useVisibility(0.3);
  const { t } = useTranslation();

  return (
    <Box id="about" mb={3} mt={3} ref={ref} sx={{ padding: "80px 0" }}>
      <Container>
        <Typography mb={5} variant="h4" gutterBottom>
          {t("about.title")}
        </Typography>
        <Fade in={isVisible} timeout={2000}>
          <Grid container spacing={5} alignItems="left" sx={{ flexDirection: { xs: "column", lg: "row" }, flexWrap: { xs: "wrap", lg: "nowrap" } }}>
            {/* Columna de la imagen */}
            <Grid mb={5} item xs={12} lg={5}>
              <Box component="img" src="/images/profile.jpg" alt="Kilian Hernández" sx={{
                width: {
                  xs: "50%",  // para pantallas pequeñas
                  sm: "25%",  // pantallas pequeñas a medianas
                  lg: "100%", // pantallas grandes
                },
                maxWidth: "800px", borderRadius: "12px", boxShadow: 4, display: "block", margin: "0 auto"
              }} />
            </Grid>
            {/* Columna del texto */}
            <Grid item xs={12} lg={7}>
              <SeeMore collapsedContent={
                <Typography textAlign="justify" variant="body1" paragraph>
                  {t("about.description1")}
                </Typography>
              }
                expandedContent={
                  <>
                    <Typography textAlign="justify" variant="body1" paragraph>
                      {t("about.description1")}
                    </Typography>
                    <Typography textAlign="justify" variant="body1" paragraph>
                      {t("about.description2")}
                    </Typography>
                    <Typography textAlign="justify" variant="body1" paragraph>
                      {t("about.description3")}
                    </Typography>
                    <Typography textAlign="justify" variant="body1" paragraph>
                      {t("about.description4")}
                    </Typography>
                  </>
                }
              />
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </Box>
  );
};

export default AboutSection;
