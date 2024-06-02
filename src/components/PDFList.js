import React from 'react';

const PDFList = ({ materials }) => {
  return (
    <div className="pdf-list">
      <ul>
        {materials.map((material, index) => (
          <li key={index}>
            {material.title} 
            <a href={material.url} target="_blank" rel="noopener noreferrer">View</a> 
            <a href={material.url} download>Download</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PDFList;
