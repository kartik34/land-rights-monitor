// src/components/ProjectGallery.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

function ProjectGallery() {
    const projects = [
        { id: 1, name: 'Site C Dam', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Site_C_dam_site%2C_looking_downstream.jpg' },
        { id: 2, name: 'Trans Mountain Pipeline', imageUrl: 'https://majorprojects.alberta.ca/asset/WorkInProgressAsset/80' },
        // Add more projects
    ];

    const gridItemStyles = {
        margin: '10px',
    };

    const cardStyles = {
        height: '270px', // Adjust the height as needed
    };

    return (
        <Grid container spacing={2}>
            {projects.map((project) => (
                <Grid item xs={12} sm={5.8} key={project.id} sx={gridItemStyles}>
                    <Link to={`/project/${project.id}`}>
                        <Card sx={cardStyles}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200" // Adjust the height of the image
                                    image={project.imageUrl}
                                    alt={project.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
}

export default ProjectGallery;
