// src/components/ProjectPage.js
import React from 'react';

function ProjectPage({ projectNumber }) {
    // Use the projectNumber to fetch and display project-specific data

    return (
        <div>
            <h1>Project {projectNumber}</h1>
            {/* Add project-specific content here */}
        </div>
    );
}

export default ProjectPage;