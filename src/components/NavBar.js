// src/components/NavBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Select, MenuItem, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const navStyles = {
    backgroundColor: '#333',
    color: '#fff',
};

const selectStyles = {
    color: '#fff', // Change the text color to white
    '& .MuiSelect-icon': {
        color: '#fff', // Change the dropdown icon color to white
    },
};

function NavBar() {
    const projects = [
        { id: 1, name: 'Project 1' },
        { id: 2, name: 'Project 2' },
        // Add more projects
    ];

    return (
        <AppBar position="static" sx={navStyles}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Land Rights Monitor
                    </Link>
                </Typography>
                <Select label="Projects" variant="outlined" sx={selectStyles}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {projects.map((project) => (
                        <MenuItem key={project.id} value={project.name}>
                            <Link to={`/project/${project.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                {project.name}
                            </Link>
                        </MenuItem>
                    ))}
                </Select>
                <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <Button color="inherit">About</Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
