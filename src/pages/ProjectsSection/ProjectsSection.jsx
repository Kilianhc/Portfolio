import React from "react";
import { Container, Fade, Typography, Box, Grid, Button, Card, CardMedia, CardContent } from "@mui/material";
import useVisibility from "../../Hooks/useVisibility";

const projects = [
    {
        title: "Portfolio Personal",
        description: "Mi sitio web donde muestro mis proyectos y habilidades.",
        image: "/images/portfolio.png",
        link: "https://tuportafolio.com",
    },
    {
        title: "E-commerce React",
        description: "Un e-commerce construido con React y Firebase.",
        image: "/images/ecommerce.png",
        link: "https://miecommerce.com",
    },
    {
        title: "Dashboard Admin",
        description: "Panel de administración con estadísticas y gráficos.",
        image: "/images/dashboard.png",
        link: "https://midashboard.com",
    },
];


const ProjectsSection = () => {
    const [ref, isVisible] = useVisibility(0.7);

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
                                    <CardMedia component="img" height="200" image={project.image} alt={project.title} />
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2">{project.description}</Typography>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            sx={{ marginTop: "10px" }}
                                            href={project.link}
                                            target="_blank"
                                        >
                                            Ver Proyecto
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
