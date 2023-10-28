// src/components/ProjectGallery.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

function ProjectGallery() {
    const projects = [
        { id: 1, name: 'Project 1', imageUrl: 'project1.jpg' },
        { id: 2, name: 'Project 2', imageUrl: 'project2.jpg' },
        // Add more projects
    ];

    const gridItemStyles = {
        margin: '10px', // Add margin for spacing
    };

    return (
        <Grid container spacing={2}>
            {projects.map((project) => (
                <Grid item xs={12} sm={5.8} key={project.id} sx={gridItemStyles}>
                    <Link to={`/project/${project.id}`}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
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
