import React from "react";
import { Box, Container, Typography, Grid, Fade, Paper, useTheme } from "@mui/material";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaLock, FaIcons } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMongoose, SiMui, SiI18Next, SiIcon } from "react-icons/si";
import useVisibility from "../../Hooks/useVisibility";
import { useTranslation } from "react-i18next";

const TechnologiesSection = () => {
  const [ref, isVisible] = useVisibility(0.3);
  const theme = useTheme(); // Accedemos al tema actual
  const { t } = useTranslation();
  // Categorías y tecnologías
  const categorizedTechnologies = {
    [t("technologies.subtitle1")]: [
      { name: "React", icon: <FaReact size={80} color="#61DBFB" /> },
      { name: "JavaScript", icon: <FaJs size={80} color="#F7DF1E" /> },
      { name: "HTML5", icon: <FaHtml5 size={80} color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3Alt size={80} color="#264de4" /> },
      { name: "Material UI", icon: <SiMui size={80} color="#007FFF" /> },
      { name: "i18next", icon: <SiI18Next size={80} color="#5dc1b9" /> }, 
    ],
    [t("technologies.subtitle2")]: [
      { name: "Node.js", icon: <FaNodeJs size={80} color="#68A063" /> },
      { name: "Express.js", icon: <SiExpress size={80} color="green" /> },
      { name: "MongoDB", icon: <SiMongodb size={80} color="#4DB33D" /> },
      { name: "Mongoose", icon: <SiMongoose size={80} color="red" /> },
      { name: "JWT", icon: <FaLock size={80} color="#f57c00" /> },
    ],
    [t("technologies.subtitle3")]: [
      { name: "Git & GitHub", icon: <FaGithub size={80} color="purple" /> },
    ],
  };
  return (
    <Box id="technologies" ref={ref} sx={{ padding: "80px 0" }}>
      <Container>
        <Typography variant="h4" gutterBottom mb={2} >
          {t("technologies.title")}
        </Typography>
        {Object.entries(categorizedTechnologies).map(([category, techs], index) => (
          <Box key={category} sx={{ marginBottom: "40px" }}>
            <Typography variant="h6" color="primary" gutterBottom mb={2} textAlign="center" >
              {category}
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {techs.map((tech, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <Fade in={isVisible} timeout={2000}>
                    <Paper elevation={3} sx={{
                      padding: "30px 20px", width: "120px", margin: "auto", textAlign: "center",
                      transition: "all 0.3s ease-in-out", boxShadow: 3, borderRadius: "12px", backgroundColor: "black",
                      "&:hover": { transform: "scale(1.05)", boxShadow: 6, backgroundColor: theme.palette.mode === 'dark' ? 'action.hover' : 'action.hover', cursor: "pointer" }
                    }}>
                      {tech.icon}
                      <Typography variant="subtitle1" sx={{ marginTop: "12px" }}>
                        {tech.name}
                      </Typography>
                    </Paper>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default TechnologiesSection;
