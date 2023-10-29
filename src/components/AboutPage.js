// src/components/AboutPage.js
import React from 'react';

const aboutPageStyles = {
    marginLeft: '150px', // Adjust the margin size as needed
    marginRight: '150px', // Adjust the margin size as needed
    marginTop: '40px', // Adjust the margin size as needed
};
const bulletStyles = {
    marginTop: '10px'
};
function AboutPage() {
    return (
        <div style={aboutPageStyles}>
            <h1>About Us</h1>
            <p>
                Welcome to LandRightsMonitor, a powerful tool dedicated to enhancing transparency and accountability in infrastructure project development by providing access to Earth observation data. Our mission is to empower a wide range of stakeholders, from government agencies and environmental organizations to local communities and litigators, with the tools and knowledge they need to monitor the progress and impact of infrastructure projects. Additionally, it's important to recognize the unique impact of these projects on women and their roles within affected communities.
            </p>
            <p>
                Infrastructure projects play a crucial role in economic development, but they can also have far-reaching consequences for the environment and local communities. In many cases, communities may not have a say in the decisions that affect their land and resources, and environmental impacts can go unnoticed. That's where LandRightsMonitor comes in.

            </p>
            <p>
                Our platform leverages the power of Earth observation data, including satellite imagery, remote sensing, and geospatial analysis, to provide a comprehensive view of infrastructure projects and their environmental footprint. By making this information accessible to all.

            </p>
            <ul>
                <li style={bulletStyles}>
                    Enhance Transparency: We believe that access to information is a fundamental right. [Project Name] strives to make infrastructure project data transparent and easily accessible for everyone, including women who often play vital roles within communities and households.

                </li>
                <li style={bulletStyles}>
                    Foster Informed Decision-Making: Informed decisions are the cornerstone of responsible project development. We provide stakeholders with the data they need to make well-informed choices about infrastructure projects, with special consideration for the potential impacts on women, who may have unique concerns and responsibilities within affected communities.

                </li>
                <li style={bulletStyles}>
                    Protect the Environment: Environmental conservation is a global priority. By monitoring projects and their impact, we contribute to the preservation of our planet for future generations, recognizing that women often bear the disproportionate burden of environmental degradation and are vital stewards of the environment.

                </li>
            </ul>
        </div>
    );
}

export default AboutPage;
