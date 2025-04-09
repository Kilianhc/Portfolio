import React, { useState } from "react";
import { Container, Typography, Box, Fade, Button, Grid } from "@mui/material";
import useVisibility from "../../Hooks/useVisibility";

const AboutSection = () => {
  const [ref, isVisible] = useVisibility(0.3);
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => setShowMore(!showMore);

  return (
    <Box id="about" mb={7} mt={7} ref={ref} sx={{ padding: "80px 0", backgroundColor: "white" }}>
      <Container>
        <Fade in={isVisible} timeout={2000}>
          <Grid container spacing={5} alignItems="left" sx={{
    flexDirection: { xs: "column", lg: "row" },
    flexWrap: { xs: "wrap", lg: "nowrap" },
  }}>
            {/* Columna del texto */}
            <Grid item xs={12} lg={7}>
              <Typography variant="h4" gutterBottom>
                Sobre mí
              </Typography>

              <Typography textAlign="justify" variant="body1" paragraph>
                Soy Kilian Daniel Hernández Chirino, apasionado por el desarrollo web y la creación de aplicaciones y experiencias interactivas. Me encanta resolver problemas y explorar nuevas tecnologías mejorando así mis habilidades día a día, con una ética de trabajo basada en la disciplina.
              </Typography>

              {showMore && (
                <Fade in={showMore} timeout={600}>
                  <Typography textAlign="justify" variant="body1" paragraph>
                    Mi experiencia en el mundo de la programación comienza a principios del año 2023 cuando decido aprender desarrollo web de manera autodidacta, al principio por medio de cursos en línea. En Septiembre de ese mismo año comienzo mis estudios como Técnico Superior en Desarrollo de Aplicaciones Multiplataforma en Universae, terminando dichos estudios en Enero de 2025 tras realizar las prácticas formativas en la empresa Higher Education Software SL.
                    <br /><br />
                    En enero de 2025 tras haber terminado DAM consigo entrar en la Escuela de Programadores de la Fundación Universitaria de Las Palmas, lo que me da la oportunidad de realizar el Bootcamp de Desarrollo Web Full Stack con Ironhack, el cual finalizó de manera satisfactoria en Abril de 2025. En este Bootcamp realizo la mayoría de mis proyectos poniendo en ellos el conocimiento adquirido durante estos años y que a día de hoy sigo adquiriendo, con formación complementaria.
                    <br /><br />
                    Tengo conocimientos en los lenguajes de programación JavaScript (Es6+), HTML5, CSS3 y manejo de librería React. Además también tengo experiencia en el uso de Material UI, Node.js, Express.js, MongoDB, y en menor medida del lenguaje de programación Java y MySQL.
                  </Typography>
                </Fade>
              )}

              <Button variant="contained" sx={{ mt: 2 }} onClick={handleToggle}>
                {showMore ? "Ver menos" : "Ver más"}
              </Button>
            </Grid>

            {/* Columna de la imagen */}
            <Grid item xs={12} lg={5}>
              <Box
                component="img"
                src="src/assets/images/profile.jpg" // Reemplaza esto por la ruta de tu imagen
                alt="Kilian Hernández"
                sx={{
                  width: {
                    xs: "50%",  // para pantallas pequeñas
                    sm: "25%",  // pantallas pequeñas a medianas
                    lg: "100%", // pantallas grandes
                  },
                  maxWidth: "400px",
                  borderRadius: "12px",
                  boxShadow: 4,
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </Box>
  );
};

export default AboutSection;
