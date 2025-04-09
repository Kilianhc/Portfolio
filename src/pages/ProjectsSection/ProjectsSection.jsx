import React from "react";
import { Container, Fade, Typography, Box, Grid, Button, Card, CardMedia, CardContent } from "@mui/material";
import useVisibility from "../../Hooks/useVisibility";

const projects = [
    {
        title: "This is Football !",
        description: "Mi sitio web donde muestro mis proyectos y habilidades.",
        image: "src/assets/images/thisis.png",
        link: "https://tuportafolio.com",
        repository: "" ,
    },
    {
        title: "FootballStats",
        description: "Un e-commerce construido con React y Firebase.",
        image: "src/assets/images/football-stats.png",
        link: "https://miecommerce.com",
        repository: "" ,
    },
    {
        title: "KiMovie",
        description: "Panel de administración con estadísticas y gráficos.",
        image: "src/assets/images/ki-movie.png",
        link: "https://midashboard.com",
        repository: "" ,
    },
];


const ProjectsSection = () => {
    const [ref, isVisible] = useVisibility(0.3);

    return (
        <Box id="projects" ref={ref} sx={{ padding: "80px 0", backgroundColor: "#e3f2fd" }}>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Proyectos Destacados
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Fade in={isVisible} timeout={2000}>
                                <Card sx={{ boxShadow: 3 }}>
                                    <CardMedia component="img" height="200" width="400" image={project.image} alt={project.title} />
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2">{project.description}</Typography>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            sx={{ marginTop: "10px", marginRight:"10px" }}
                                            href={project.link}
                                            target="_blank"
                                        >
                                            Ver Proyecto
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            sx={{ marginTop: "10px" }}
                                            href={project.link}
                                            target="_blank"
                                        >
                                            Ver Repositorio
                                        </Button>
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
