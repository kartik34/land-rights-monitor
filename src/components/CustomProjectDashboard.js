// src/components/CustomProjectDashboard.js
import React from 'react';
import { useParams } from 'react-router-dom';
import KeyFactsTable from './KeyFactsTable';

const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
};

const h2Styles = {
    textAlign: 'center',
};

const tableStyles = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px #ccc',
    maxWidth: '600px',
    margin: '10px auto', // Center the table horizontally
    marginBottom: '50px'
};

const thStyles = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
};

const tdStyles = {
    padding: '10px',
};

function CustomProjectDashboard() {
    const { id } = useParams();

    // Replace with your data fetching logic to get project details by ID
    const projects = [
        {
            id: '1',
            name: 'Project 1',
            customContent: (
                <div>
                    <h1 style={h2Styles}>Project Dashboard for Site C Dam</h1>

                    {/* Key Facts Table for Project 1 */}
                    <KeyFactsTable
                        facts={[
                            { label: 'Official name', value: 'Site C Project' },
                            { label: 'Location', value: 'British Columbia, Canada' },
                            { label: 'Coordinates', value: '56°11′41″N 120°54′51″W' },
                            { label: 'Status', value: 'Under construction' },
                            { label: 'Opening date', value: '2025 (planned)' },
                            { label: 'Construction cost', value: 'C$16 billion, February 2021 estimate' },
                            { label: 'Impounds', value: 'Peace River' },
                            { label: 'Height', value: '60 m (200 ft)[1]' },
                            { label: 'Length', value: '1,050 m (3,440 ft)[1]' },
                            { label: 'Surface area', value: '9,330 ha (23,100 acres)[1]' }
                        ]}
                    />
                    <video width="960" height="540" controls>
                        <source src="https://storage.googleapis.com/planet-t2/site-c-dam-over-time-yu2jU37Ig/movie.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h4>River Beds surrounding Site C Dam over time</h4>
                    <video width="960" height="540" controls>
                        <source src="https://storage.googleapis.com/planet-t2/more-agricultural-impacts-from-the-site-c-dam-D9CQCq7SR/movie.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h4>River Beds surrounding Site C Dam over time</h4>

                    <iframe src="https://drive.google.com/file/d/1L1lBUgucpbV3jD93alrfndnC_bEnyvD1/preview" width="640" height="480" allow="autoplay"></iframe>
                    <h4>River Beds surrounding Site C Dam over time</h4>

                </div>
            ),
        },
        {
            id: '2',
            name: 'Project 2',
            customContent: (
                <div>
                    <h2 style={h2Styles}>Custom Project Dashboard for Project 2</h2>
                    <p>This is a customized project dashboard with unique content for Project 2.</p>
                    <video width="480" height="270" controls>
                        <source src="video2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <p>Caption for Project 2 video goes here.</p>

                    <h4>River Beds surrounding Site C Dam over time</h4>

                    <iframe src="https://drive.google.com/file/d/1L1lBUgucpbV3jD93alrfndnC_bEnyvD1/preview" width="640" height="480" allow="autoplay"></iframe>
                    <h4>River Beds surrounding Site C Dam over time</h4>

                    {/* Key Facts Table for Project 2 */}

                    /* Key Facts Table for Project 1 */
                    <KeyFactsTable
                        facts={[
                            { label: 'Official name', value: 'Site C Project' },
                            { label: 'Location', value: 'British Columbia, Canada' },
                            { label: 'Coordinates', value: '56°11′41″N 120°54′51″W' },
                            { label: 'Status', value: 'Under construction' },
                            { label: 'Opening date', value: '2025 (planned)' },
                            { label: 'Construction cost', value: 'C$16 billion, February 2021 estimate' },
                            { label: 'Owner(s)', value: 'BC Hydro' },
                            { label: 'Type of dam', value: 'Earth fill[1]' },
                            { label: 'Impounds', value: 'Peace River' },
                            { label: 'Height', value: '60 m (200 ft)[1]' },
                            { label: 'Length', value: '1,050 m (3,440 ft)[1]' },
                            { label: 'Surface area', value: '9,330 ha (23,100 acres)[1]' },
                            { label: 'Installed capacity', value: '1,100 MW[2]' },
                            { label: 'Annual generation', value: '4,600 GWh[1]' },
                        ]}
                    />
                </div>
            ),
        },
        // Add more project data with custom content
    ];

    const selectedProject = projects.find((project) => project.id === id);

    if (!selectedProject) {
        return <div>Project not found</div>;
    }

    return (
        <div style={containerStyles}>
            {selectedProject.customContent}
        </div>
    );
}

export default CustomProjectDashboard;
