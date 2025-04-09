import React from "react";
import { Container, Fade, Typography, Box, Grid, Button, Card, CardMedia, CardContent } from "@mui/material";
import useVisibility from "../../Hooks/useVisibility";
import SeeMore from "../../GeneralComponents/SeeMore";
import { Chip } from "@mui/material"

const projects = [

    {
        title: "FootballStats",
        description: "FootballStats es una aplicación Full-stack desarrollada con el stack MERN (MongoDB, Express, React y Node.js). Permite gestionar estadísticas de fútbol para equipos y jugadores, ofreciendo herramientas tanto para analistas como para entrenadores.",
        image: "src/assets/images/football-stats.png",
        link: "https://analyststats.netlify.app/",
        repository: "https://github.com/Kilianhc/FootballStats-Frontend",
        technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "MUI", "JWT", "Axios", "Mongoose", "Google Gemini AI", "Google Perspective API", "bcrypt.js", "Express Rate Limit"]
    },
    {
        title: "KiMovie",
        description: "Este proyecto es una aplicación web y móvil de una Single Page Application (SPA) desarrollada con React, JavaScript, Material UI y JSON Server. Permite gestionar una lista de películas con funcionalidades como agregar a favoritos, marcar como vistas o por ver, y una sección exclusiva para administradores.",
        image: "src/assets/images/ki-movie.png",
        link: "https://ki-movie.netlify.app/",
        repository: "https://github.com/Kilianhc/React-Project",
        technologies: ["React", "JSON Server", "JavaScript", "Material UI"]
    },
    {
        title: "This is Football !",
        description: "Un proyecto donde experimento con mecánicas, gráficos y lógica en JavaScript. Este proyecto me ha permitido profundizar en la programación orientada a objetos y el manejo de eventos en juegos interactivos.",
        image: "src/assets/images/thisis.png",
        link: "https://kilianhc.github.io/project-1-The-Game/",
        repository: "https://github.com/Kilianhc/project-1-The-Game",
        technologies: ["JavaScript", "HTML5", "CSS3"]
    }
];


const ProjectsSection = () => {
    const [ref, isVisible] = useVisibility(0.3);

    return (
        <Box id="projects" ref={ref} sx={{ padding: "80px 0", backgroundColor: "white" }}>
            <Container>
                <Typography mb={5} variant="h4" gutterBottom>
                    Proyectos Destacados
                </Typography>
                <Grid justifyContent="center" container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Fade in={isVisible} timeout={2000}>
                                <Card
                                    sx={{
                                        color: "white",
                                        backgroundColor: "black",
                                        boxShadow: 3,
                                        maxWidth: "350px",
                                        borderRadius: "12px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        transition: "all 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "scale(1.05)",
                                            boxShadow: 10,
                                            cursor: "pointer",
                                        },
                                    }}
                                >

                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={project.image}
                                        alt={project.title}
                                        sx={{
                                            objectFit: "cover",
                                            transition: "0.3s",
                                            "&:hover": {
                                                opacity: 0.9,
                                            },
                                        }}
                                    />

                                    <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                        <Typography variant="h6" gutterBottom>
                                            {project.title}
                                        </Typography>

                                        <SeeMore fullWidthButton
                                            collapsedContent={
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        display: "-webkit-box",
                                                        WebkitLineClamp: 4,
                                                        WebkitBoxOrient: "vertical",
                                                    }}
                                                >
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
                                                        <Button
                                                            variant="outlined"
                                                            color="primary"
                                                            href={project.link}
                                                            target="_blank"
                                                        >
                                                            Ver Proyecto
                                                        </Button>
                                                        <Button
                                                            variant="outlined"
                                                            color="primary"
                                                            href={project.repository}
                                                            target="_blank"
                                                        >
                                                            Ver Repositorio
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
