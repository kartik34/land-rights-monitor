// src/components/KeyFactsTable.js
import React from 'react';

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
    borderBottom: '1px solid #ddd', // Add border at the bottom of table header
    borderRight: '1px solid #ddd', // Add vertical border between columns
};

const tdStyles = {
    padding: '10px',
    borderBottom: '1px solid #ddd', // Add border at the bottom of table cells
    borderRight: '1px solid #ddd', // Add vertical border between columns
};

const KeyFactsTable = ({ facts }) => (
    <table style={tableStyles}>
        <thead>
            <tr>
                <th style={thStyles}>Key Facts</th>
                <th style={thStyles}>Information</th>
            </tr>
        </thead>
        <tbody>
            {facts.map((fact, index) => (
                <tr key={index}>
                    <td style={tdStyles}>{fact.label}</td>
                    <td style={tdStyles}>{fact.value}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default KeyFactsTable;
