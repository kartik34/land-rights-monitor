// src/components/ProjectDashboard.js
import React from 'react';
import { useParams } from 'react-router-dom';

const projectDashboardStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
};

function ProjectDashboard() {
    const { id } = useParams();

    // Replace with your data fetching logic to get project details by ID
    const projects = [
        { id: '1', name: 'Project 1', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1' },
        { id: '2', name: 'Project 2', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2' },
        // Add more project data
    ];

    const selectedProject = projects.find((project) => project.id === id);

    if (!selectedProject) {
        return <div>Project not found</div>;
    }

    return (
        <div style={projectDashboardStyles}>
            <h1>{selectedProject.name}</h1>
            <iframe
                width="560"
                height="315"
                src={selectedProject.videoUrl}
                title={`Project Video ${selectedProject.id}`}
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <div>
                {/* Timeline of key developments for the selected project */}
                <h2>Timeline of Key Developments for {selectedProject.name}</h2>
                {/* Add timeline items here */}
            </div>
        </div>
    );
}

export default ProjectDashboard;
