import React from "react";
import { Box, Container, Typography, Grid, Fade } from "@mui/material";
import { FaReact, FaNodeJs, FaJs, FaCss3Alt } from "react-icons/fa";
import useVisibility from "../../Hooks/useVisibility";

const technologies = [
    { name: "React", icon: <FaReact size={40} color="#61DBFB" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} color="#68A063" /> },
    { name: "JavaScript", icon: <FaJs size={40} color="#F7DF1E" /> },
    { name: "CSS", icon: <FaCss3Alt size={40} color="#264de4" /> },
];

const TechnologiesSection = () => {
    const [ref, isVisible] = useVisibility(0.7);

    return (
        <Box id="technologies" ref={ref} sx={{ padding: "80px 0", backgroundColor: "#fff" }}>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Tecnologías Usadas
                </Typography>
                <Grid container spacing={4}>
                    {technologies.map((tech, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Fade in={isVisible} timeout={2000}>
                                <Box sx={{ padding: "20px", textAlign: "center" }}>
                                    {tech.icon}
                                    <Typography variant="h6" sx={{ marginTop: "10px" }}>
                                        {tech.name}
                                    </Typography>
                                </Box>
                            </Fade>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default TechnologiesSection;
