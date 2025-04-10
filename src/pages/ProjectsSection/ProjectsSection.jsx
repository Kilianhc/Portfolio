import React from "react";
import { Container, Fade, Typography, Box, Grid, Button, Card, CardMedia, CardContent } from "@mui/material";
import useVisibility from "../../Hooks/useVisibility";
import SeeMore from "../../GeneralComponents/SeeMore";
import { Chip } from "@mui/material"
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
    const [ref, isVisible] = useVisibility(0.2);
    const { t } = useTranslation();
    const projects = [
        {
            title: "FootballStats",
            description: t("projects.description1"),
            image: "/Portfolio/images/football-stats.png",
            link: "https://analyststats.netlify.app/",
            repository: "https://github.com/Kilianhc/FootballStats-Frontend",
            technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "MUI", "JWT", "Axios", "Mongoose", "Google Gemini AI",
                "Google Perspective API", "bcrypt.js", "Express Rate Limit"]
        },
        {
            title: "KiMovie",
            description: t("projects.description2"),
            image: "/Portfolio/images/ki-movie.png",
            link: "https://ki-movie.netlify.app/",
            repository: "https://github.com/Kilianhc/React-Project",
            technologies: ["React", "JSON Server", "JavaScript", "Material UI"]
        },
        {
            title: "Portfolio Personal",
            description: t("projects.description4"),
            image: "/Portfolio/images/portfolio.png",
            link: "https://kilianhc.github.io/Portfolio/",
            repository: "https://github.com/Kilianhc/Portfolio",
            technologies: ["React", "HTML", "CSS", "i18next", "JavaScript", "Material UI"]
        },
        {
            title: "This is Football !",
            description: t("projects.description3"),
            image: "/Portfolio/images/thisis.png",
            link: "https://kilianhc.github.io/project-1-The-Game/",
            repository: "https://github.com/Kilianhc/project-1-The-Game",
            technologies: ["JavaScript", "HTML5", "CSS3"]
        }
    ];

    return (
        <Box id="projects" ref={ref} sx={{ padding: "80px 0" }}>
            <Container>
                <Typography mb={5} variant="h4" gutterBottom>
                    {t("projects.title")}
                </Typography>
                <Grid justifyContent="center" container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Fade in={isVisible} timeout={2000}>
                                <Card sx={{
                                    color: "white", boxShadow: 3, maxWidth: "350px", borderRadius: "12px", display: "flex", flexDirection: "column", justifyContent: "space-between",
                                    transition: "all 0.3s ease-in-out", "&:hover": { transform: "scale(1.05)", boxShadow: 10, cursor: "pointer" }
                                }}>
                                    <CardMedia component="img" height="200" image={project.image} alt={project.title} sx={{
                                        objectFit: "cover",
                                        transition: "0.3s", "&:hover": { opacity: 0.7 }
                                    }} />
                                    <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                        <Typography variant="h6" gutterBottom>
                                            {project.title}
                                        </Typography>
                                        <SeeMore fullWidthButton collapsedContent={
                                            <Typography variant="body2" sx={{
                                                overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box",
                                                WebkitLineClamp: 4, WebkitBoxOrient: "vertical"
                                            }}>
                                                {project.description}
                                            </Typography>
                                        }
                                            expandedContent={
                                                <>
                                                    <Typography variant="body2" paragraph>
                                                        {project.description}
                                                    </Typography>
                                                    {project.technologies && (
                                                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                                                            {project.technologies.map((tech, idx) => (
                                                                <Chip key={idx} label={tech} size="small" color="primary" />
                                                            ))}
                                                        </Box>
                                                    )}
                                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                                        <Button variant="outlined" color="primary" href={project.link} target="_blank">
                                                            {t("projects.button1")}
                                                        </Button>
                                                        <Button variant="outlined" color="primary" href={project.repository} target="_blank">
                                                            {t("projects.button2")}
                                                        </Button>
                                                    </Box>
                                                </>
                                            }
                                        />
                                    </CardContent>
                                </Card>
                            </Fade>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ProjectsSection;
